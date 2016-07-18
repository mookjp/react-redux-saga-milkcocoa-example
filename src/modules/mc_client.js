import 'babel-polyfill';

import MilkCocoa from 'milkcocoa';

export default class MCClient {
  constructor(appId) {
    this.milkcocoa = new MilkCocoa(appId);
    this.messageStore = this.milkcocoa.dataStore('messageStore');
  }

  timeout() {
    return new Promise((_, reject) => {
      setTimeout(reject, 5000, new Error('timeout'));
    });
  }

  postMessage(name, message) {
    return Promise.race([
      new Promise((resolve, reject) => {
        this.messageStore.send({ name, message, timestamp: Date.now() },
          this.onComplete(resolve, reject),
          this.onError(reject));
      }),
      this.timeout(),
    ]);
  }

  onComplete(resolve, reject) {
    return (err, datum) => {
      if (err) {
        return reject(err);
      }
      return resolve(datum);
    };
  }

  onError(reject) {
    return (err) => {
      reject(err);
    };
  }

  onSend() {
    return new Promise((resolve) => {
      this.messageStore.on('send', (datum) => {
        resolve(datum.value);
      });
    });
  }
}
