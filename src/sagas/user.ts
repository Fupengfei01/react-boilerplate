import { call, put, takeLatest } from 'redux-saga/effects';

import { user } from '../services';
import { Actions, LoginAction } from '../actions/user';

function* login(action: LoginAction): Generator {
  try {
    const result = yield call(user.login, action.payload);

    yield put({
      type: Actions.RECEIVE_USER_INFO,
      payload: result,
    });
  } catch (e) {}
}

export function* watchUserLogin(): Generator {
  yield takeLatest(Actions.USER_LOGIN, login);
}
