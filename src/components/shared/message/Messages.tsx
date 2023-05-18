import { MessageItem } from './message-item/MessageItem';
import './Messages.scss';

export const Messages = () => {
	return (
		<div className='messages'>
			{Array(100).fill(1).map((_, idx) => <MessageItem key={idx + 1} isOwner={idx % 2 === 0} text={idx+1} />)}
		</div>
	)
}