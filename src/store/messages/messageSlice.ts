import { createSlice } from '@reduxjs/toolkit';
import { fetchChatMessages, createMessage } from './thunks';
import type { MessagesState } from './types';

const initialState: MessagesState = {
	messages: []
}

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchChatMessages.fulfilled, (state, { payload }) => {
				if (payload) state.messages = payload
			})
			.addCase(createMessage.fulfilled, (state, { payload }) => {
				if (payload) state.messages.push(payload)
			})
	}
})

export default messagesSlice.reducer
export const allMessagesActionCreators = () => ({ fetchChatMessages, createMessage })