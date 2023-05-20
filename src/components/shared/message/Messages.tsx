import { useRef, useEffect } from 'react'
import { useStoreSelector } from '@store/index';
import { chatMessagesSelector } from '@store/messages/selectors';
import { MessageItem } from './message-item/MessageItem';
import './Messages.scss';

export const Messages = () => {
	const messages = useStoreSelector(chatMessagesSelector);
	const conatinerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (conatinerRef.current) conatinerRef.current.scrollTop = conatinerRef.current?.scrollHeight
	}, [messages.length])

	return (
		<div ref={conatinerRef} className='messages'>
			{!messages.length && <p className="messages__chat-empty">Выбирите чат или создайте новый</p>}
			{messages.map((mess) => 
				<MessageItem 
					key={mess.idMessage} 
					isOwner={mess.type === 'outgoing' ? true : false} 
					text={mess.textMessage || ''} 
					timestamp={mess.timestamp || 0}
				/>
			)}
		</div>
	)
}