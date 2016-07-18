import assert from 'power-assert';

import MCClient from '../../src/modules/mc_client';

describe('milkcocoa', () => {
  describe('when milkcocoa can handle message', () => {
    const client = new MCClient('testAppId.mlkcca.com');
    // mock
    client.messageStore.send = (obj, onComplete, _) => {
      const err = null;
      const datum = {
        id: 'xxx',
        value: obj,
      };
      onComplete(err, datum);
    };

    it('posts message to milkccocoa', () => {
      const name = 'mookjp';
      const message = 'test from mocha';
      return client.postMessage(name, message)
        .then((datum) => {
          assert.deepEqual(datum.value.name, name);
          assert.deepEqual(datum.value.message, message);
        });
    });
  });

  describe('when milkcocoa can not handle message', () => {
    const client = new MCClient('testAppId.mlkcca.com');
    // mock
    const mockError = new Error('error!');
    client.messageStore.send = (obj, _, onError) => {
      onError(mockError);
    };

    it('rejects to post the message', () => {
      const name = 'mookjp';
      const message = 'test from mocha';
      // https://mlkcca.com/document/api-js.html
      return client.postMessage(name, message)
        .catch((err) => {
          assert.deepEqual(err, mockError);
        });
    });
  });
});