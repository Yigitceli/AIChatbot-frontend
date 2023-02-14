import { configureStore, applyMiddleware, combineReducers, MiddlewareArray } from '@reduxjs/toolkit'
import CreateSagaMiddleware from 'redux-saga';
import {mySaga} from './sagas';
import UserSlice from './userSlice';


const rootReducer = combineReducers({UserSlice})

const sagaMiddleware = CreateSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;