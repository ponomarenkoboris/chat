import defaultUser from '../../../../assets/default-user.jpg'
import droparrow from '../../../../assets/down-arrow.svg'
import './ChatItem.scss';

export const ChatItem = () => {
	return (
		<div className='chat-item'>
			<div className="chat-item__photo-wrapper">
				<img src={defaultUser} alt="Chat name" className='item__photo' />
			</div>
			<div className="chat-item__info">
				<div className="info__item">
					<p className="info__name">Some Chat</p>
					<p className="info__last-message">Hello world!</p>				
				</div>
				<div className="info__item">
					<p className="info__last-message-time">01.01.2023</p>
					<button className="info__option-button">
						<img src={droparrow} alt="Options" />
					</button>
				</div>
			</div>
		</div>
	)
}