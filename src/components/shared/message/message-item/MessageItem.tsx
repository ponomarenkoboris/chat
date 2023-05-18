import { memo } from 'react';
import angle from '../../../../assets/message/angle.svg';
import activeAngle from '../../../../assets/message/active-angle.svg';
import './MessageItem.scss';

interface MessageItemProps {
	text: number,
	isOwner: boolean
}

// TODO is nessesary memo?
export const MessageItem = memo(({ text, isOwner }: MessageItemProps) => {
	return (
		<div className="message-item">
			<div className={isOwner ? 'message owner' : 'message'}>
				<img src={isOwner ? activeAngle : angle} className={isOwner ? 'message__active-angle' : 'message__angle'} alt="" />
				<p className='message__content'>Message item: {text}</p>
				<div className="message__meta">
					<p className='meta__date'>18:05</p>
					<div className='meta__status'></div>
				</div>
			</div>
		</div>
	)
})
