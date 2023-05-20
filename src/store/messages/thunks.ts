import { createAsyncThunk } from "@reduxjs/toolkit";
import configureUrl from "@services/configureUrl";
import type { Message } from './types'

const fetchChatMessages = createAsyncThunk<Message[] | null, string>(
	'messages/fetchChatMessages',
	async (id) => {
		if (!id) return []
		try {
			const config = {
				method: 'POST',
				body: JSON.stringify({ chatId: id, count: 15 })
			}
			const response = await fetch(configureUrl('getChatHistory'), config);
			const messages = await response.json() as Message[]
			return messages.filter(mess => mess.idMessage).reverse()
		} catch (error) {
			return null
		}
	}
)

type CreateMessagePayload = { chatId: string, message: string }

const createMessage = createAsyncThunk<Message | null, CreateMessagePayload>(
	'messages/createMessage',
	async (message) => {
		try {
			const config = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(message)
			}
			const response = await fetch(configureUrl('sendMessage'), config)
			const data = await response.json()

			if (!data.idMessage) return null

			const sendedMessage = {
				type: 'outgoing',
				chatId: message.chatId,
				textMessage: message.message,
				idMessage: data.idMessage,
				timestamp: Date.now() / 1000
			}

			return sendedMessage

		} catch (error) {
			return null	
		}
	}
)

export {
	fetchChatMessages,
	createMessage
} 