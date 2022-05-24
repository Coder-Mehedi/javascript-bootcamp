/*
Execute an async function
An async IIFE allows you to use await and for-await even in older browsers and JavaScript runtimes that have no top-level await:
 */

const getFileStream = async (url) => {
  /* implementation */
};

(async () => {
  const stream = await getFileStream('https://domain.name/path/file.ext');
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
