import { ChatItem } from './chat-item/ChatItem'
import { ChatSearch } from './chat-search/ChatSearch'

import './Chat.scss'

export const Chat = () => {
	return (
		<div className='chat'>
			<ChatSearch />
			<div className='chat__container'>
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
			</div>
		</div>
	)
}