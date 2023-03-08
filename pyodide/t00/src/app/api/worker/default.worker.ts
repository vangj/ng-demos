/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
    const num = Math.random();
    const response = `${data} => ${num}`;
    postMessage(response);
  });