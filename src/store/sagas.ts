import { call, CallEffect, ChannelPutEffect, put, PutEffect, takeEvery, takeLatest } from 'redux-saga/effects'
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth, provider } from '../firebase/index';
import { AnyAction } from 'redux';
import { setIsLoggingIn } from './userSlice';



// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* login(): Generator<
   CallEffect<UserCredential> | PutEffect<AnyAction>,
   void
> {
   try {
      yield put({type: setIsLoggingIn(true).type, payload: setIsLoggingIn(true).payload})
      const result = yield call(signInWithPopup, auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result as UserCredential);
      yield put({ type: "User/loginResolved" });
   } catch (e) {
      yield put({ type: "User/loginRejected" });
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
   yield takeEvery("User/login_requested", login);
}