import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatSlice from './chat/chatSlice';
import messageSlice from './messages/messageSlice';

const rootReducer = combineReducers({
	chat: chatSlice,
	messages: messageSlice
})

const store = configureStore({
	reducer: rootReducer
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const useStoreDispatch: () => Dispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;