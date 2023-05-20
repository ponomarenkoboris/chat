import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Chat } from "./types";
import configureUrl from "@services/configureUrl";

const fetchChats = createAsyncThunk<Chat[] | null>(
	'chat/fetchChats',
	async (_, thunkAPI) => {
		try {
			const url = configureUrl('getChats')
			const response = await fetch(url);
			const chats = await response.json();
			thunkAPI.fulfillWithValue(chats)
			return chats
		} catch (error) {
			thunkAPI.rejectWithValue(null)
			return null
		}
	}
)

export { fetchChats }