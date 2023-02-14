import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";
import { UserState } from "./userSlice";


const user = (state: RootState) => state.UserSlice;

export const getLoggedInState = createSelector([user], (userData) => userData.isloggedIn);


