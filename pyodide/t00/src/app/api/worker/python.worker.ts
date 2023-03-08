/// <reference lib="webworker" />

importScripts('https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js');
declare let loadPyodide: any;

async function initialize() {
    const pyodide = await loadPyodide();
    await pyodide.loadPackage('micropip');
    return pyodide;
};

addEventListener('message', ({ data }) => {
    console.log(`got message: ${data}`);
    initialize()
        .then(pyodide => {
            pyodide.runPython(`
                print('hi');
            `);
            return pyodide;
        })
        .then(pyodide => {
            pyodide.runPython(`
                for i in range(10):
                    print(f'{i}: hello, world')
            `);
        });
});