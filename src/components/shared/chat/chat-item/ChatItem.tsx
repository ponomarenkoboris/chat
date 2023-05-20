import { memo } from 'react'
import { Chat } from '@store/chat/types';
import useChatActions from '@hooks/useChat';
import defaultUser from '@assets/shared/default-user.jpg'
import './ChatItem.scss';

type ChatItemProps = { isActive: boolean } & Chat
export const ChatItem = memo((props: ChatItemProps) => {
	const { selectActiveChat } = useChatActions()

	const onClick = () => {
		selectActiveChat(props)
	}

	return (
		<div className={props.isActive ? 'chat-item active' : 'chat-item'} onClick={onClick}>
			<div className="chat-item__photo-wrapper">
				<img src={defaultUser} alt={props.id} className='item__photo' />
			</div>
			<div className="chat-item__info">
				<div className="info__item">
					<p className="info__name">{props.name || props.id.split('@')[0]}</p>
				</div>
			</div>
		</div>
	)
})