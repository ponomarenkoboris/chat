import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './reducers';
import { fetchChats } from './thunks';
import type { ChatState, Chat } from './types'

const initialState: ChatState = {
	activeChat: {} as Chat,
	filterBy: '',
	chats: []
}

const chatSlice = createSlice({
	name: 'chatSlice',
	initialState,
	reducers,
	extraReducers: builder => {
		builder
			.addCase(fetchChats.fulfilled, (state, { payload }) => {
				if (payload) state.chats = payload
			})
	}
})

export default chatSlice.reducer;
export const allChatActionCreators = () => ({ ...chatSlice.actions, fetchChats })