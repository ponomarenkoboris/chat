export type Message = {
	type: string,
	idMessage: string,
	timestamp: number,
	chatId: string,
	textMessage: string,
}

export type MessagesState = { messages: Message[] }