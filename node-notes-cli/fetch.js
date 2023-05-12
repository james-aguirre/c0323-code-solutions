export default function fetch(url, doReject) {
  return new Promise((resolve, reject) => {
    return setTimeout(
      () =>
        doReject
          ? reject(new Error(`rejected ${url}`))
          : resolve(`fetched ${url}`),
      1000
    );
  });
}
