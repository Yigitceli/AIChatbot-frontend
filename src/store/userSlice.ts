import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';

export interface UserState {
  isloggedIn: boolean,
  email: null | string,
  avatarURL: null | string,
  userID: null | string,
  isLoggingIn: boolean,
}

const initialState: UserState = {
  isloggedIn: false,
  email: null,
  avatarURL: null,
  userID: null,
  isLoggingIn: false,
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setIsLoggingIn(state, action: PayloadAction<boolean>) {
      state.isLoggingIn = action.payload
    },
    loginResolved(state, action: PayloadAction<any>) {
      state.isLoggingIn = false;
    },
    loginRejected(state, action: PayloadAction<any>) {

    }
  },
})



export const { setIsLoggingIn, loginResolved } = UserSlice.actions
export default UserSlice.reducer