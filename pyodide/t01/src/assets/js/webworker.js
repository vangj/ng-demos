importScripts('https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js');

async function loadPyodideAndPackages() {
  self.pyodide = await loadPyodide();
  await self.pyodide.loadPackage(['micropip']);
  await self.pyodide.runPythonAsync(`
  import micropip

  await micropip.install(['tabulate'])
  `);
  await self.pyodide.loadPackage(['pandas', 'numpy', 'pytz']);
}

let pyodideReadyPromise = loadPyodideAndPackages();

self.onmessage = async (event) => {
  // make sure loading is done
  await pyodideReadyPromise;
  // Don't bother yet with this line, suppose our API is built in such a way:
  const { id, python, ...context } = event.data;
  // The worker copies the context in its own "memory" (an object mapping name to values)
  for (const key of Object.keys(context)) {
    self[key] = context[key];
  }
  // Now is the easy part, the one that is similar to working in the main thread:
  try {
    await self.pyodide.loadPackagesFromImports(python);
    let results = await self.pyodide.runPythonAsync(python);
    // https://github.com/pyodide/pyodide/issues/1620
    if(pyodide.isPyProxy(results)){ 
      let temp = results.toString();
      results.destroy();
      results = temp;
    }
    self.postMessage({ results, id });
  } catch (error) {
    self.postMessage({ error: error.message, id });
  }
};