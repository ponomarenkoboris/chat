import { PayloadAction } from '@reduxjs/toolkit'
import type { Chat, ChatState } from './types'

const selectActiveChat = (state: ChatState, { payload }: PayloadAction<Chat>) => {
	if (state.activeChat.id !== payload.id) state.activeChat = payload
}

const setFilterValue = (state: ChatState, { payload }: PayloadAction<string>) => {
	state.filterBy = payload
}

const createChat = (state: ChatState) => {
	const chat = {
		"archive": false,
        "id": `${state.filterBy}@c.us`,
        "notSpam": true,
        "ephemeralExpiration": 0,
        "ephemeralSettingTimestamp": 0
	}
	state.chats.push(chat)
}

export {
	selectActiveChat,
	setFilterValue,
	createChat
}