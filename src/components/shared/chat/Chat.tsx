import { useLayoutEffect, useRef } from 'react'
import { ChatItem } from './chat-item/ChatItem'
import { ChatSearch } from './chat-search/ChatSearch'
import { useStoreSelector } from '@store/index'
import { filteredChatsSelector, activeChatSelector } from '@store/chat/selectors'
import useChat from '@hooks/useChat';
import useMessages from '@hooks/useMessages';
import receiveNotifications, { type Notification } from '@services/notifications'
import './Chat.scss'


type RequestController = {
	isFetchChatsAvaliable: boolean,
	controller: AbortController
}

export const Chat = () => {
	const { createChat, fetchChats } = useChat()
	const { fetchChatMessages } = useMessages()
	const { filterBy, chats } = useStoreSelector(filteredChatsSelector);
	const activeChat = useStoreSelector(activeChatSelector);
	const requestController = useRef<RequestController>({ isFetchChatsAvaliable: false, controller: new AbortController() });

	const onCreateChat = () => {
		createChat()
	}

	const onNotification = ({ body }: Notification) => {
		if (activeChat.id === body.senderData.chatId) {
			fetchChatMessages(body.senderData.chatId)
		}
	}

	useLayoutEffect(() => {
		if (requestController.current.isFetchChatsAvaliable) fetchChats()
		requestController.current.isFetchChatsAvaliable = true
	}, [])

	useLayoutEffect(() => {
		if (activeChat) receiveNotifications(onNotification, requestController.current.controller)
	}, [activeChat])

	return (
		<div className='chat'>
			<ChatSearch />
			<div className='chat__container'>
				{!chats.length && !!filterBy.length && <button className='create__button' onClick={onCreateChat}>Создать чат</button>}
				{chats.map(chat => <ChatItem key={chat.id} {...chat} isActive={chat.id === activeChat.id} />)}
			</div>
		</div>
	)
}