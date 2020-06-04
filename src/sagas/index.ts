import { all, fork } from 'redux-saga/effects';

import { watchUserLogin } from './user';

export default function* root(): Generator {
  yield all([fork(watchUserLogin)]);
}
