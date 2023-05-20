import { memo } from 'react';
import angle from '@assets/message/message-angle.svg';
import activeAngle from '@assets/message/active-message-angle.svg'

import './MessageItem.scss';

interface MessageItemProps {
	text: string,
	isOwner: boolean,
	timestamp: number
}

export const MessageItem = memo(({ text, isOwner, timestamp }: MessageItemProps) => {
	const date = new Date(timestamp * 1000)
	return (
		<div className="message-item">
			<div className={isOwner ? 'message owner' : 'message'}>
				<img src={isOwner ? activeAngle : angle} className={isOwner ? 'message__active-angle' : 'message__angle'} alt="" />
				<p className='message__content'>{text}</p>
				<div className="message__meta">
					<p className='meta__date'>{date.getHours() + ':' + date.getMinutes()}</p>
					<div className='meta__status'></div>
				</div>
			</div>
		</div>
	)
})
