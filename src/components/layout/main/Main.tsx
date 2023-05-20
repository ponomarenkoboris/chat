import { useEffect } from 'react'
import { Header } from '..';
import { useStoreSelector } from '@store/index';
import { activeChatSelector } from '@store/chat/selectors'
import { Messages, UserInput } from '@shared/index';
import useMessages from '@hooks/useMessages';
import './Main.scss';

export const Main = () => {
	const { fetchChatMessages } = useMessages()
	const { id, name } = useStoreSelector(activeChatSelector)

	useEffect(() => {
		fetchChatMessages(id)
	}, [id])

	return (
		<div className="main">
			<Header username={name ? name : id ? id.split('@')[0] : ''} />
			<Messages />
			<UserInput chatId={id}/>	
		</div>
	)
}