import 'babel-polyfill';

import { takeLatest } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';

import { POST_MESSAGE, SET_MESSAGE, postMessage, setMessage } from '../reducers/message';
import { setLoading } from '../reducers/loading';
import MCClient from '../modules/mc_client';

const client = new MCClient(MILKCOCOA_APPID);

function* postMessageAsync(action) {
  yield put(setLoading(true));
  try {
    yield call([client, client.postMessage], action.payload.name, action.payload.message);
  } catch (e) {
    // TODO: show error message to the client
    console.error(e);
  }
  yield put(setLoading(false));
}

function* watchPostMessage() {
  while (true) {
    yield* takeLatest(POST_MESSAGE, postMessageAsync);
  }
}

function* watchMilkCocoaSend() {
  while (true) {
    const datum = yield call([client, client.onSend]);
    yield put(setMessage(datum));
  }
}

export default function* root() {
  yield [
    fork(watchMilkCocoaSend),
    fork(watchPostMessage),
  ];
}
