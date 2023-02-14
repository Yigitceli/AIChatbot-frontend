import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* login() {
   try {
      yield put({type: "LOGIN_SUCCEEDED"});
   } catch (e) {
      yield put({type: "LOGIN_FAILED"});
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
  yield takeEvery("LOGIN_REQUESTED", login);
}