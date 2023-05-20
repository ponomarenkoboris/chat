export type Chat = {
	archive: boolean,
	id: string,
	notSpam: boolean,
	ephemeralExpiration: number,
	ephemeralSettingTimestamp: number,
	name?: string
}

export type ChatState = {
	activeChat: Chat,
	chats: Chat[],
	filterBy: string
}