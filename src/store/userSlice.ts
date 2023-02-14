import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';

export interface UserState {
  isloggedIn: boolean
}

const initialState: UserState = {
  isloggedIn: true,
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
})



export const { } = UserSlice.actions
export default UserSlice.reducer