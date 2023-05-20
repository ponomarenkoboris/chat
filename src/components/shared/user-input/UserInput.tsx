import { KeyboardEvent, useRef, useState } from 'react';
import useMessages from '@hooks/useMessages';
import send from '@assets/user-input/send.svg';
import './UserInput.scss';

type UserInputProps = { chatId: string }
export const UserInput = ({ chatId }: UserInputProps) => {
	const inputRef = useRef<HTMLTextAreaElement>(null)
	const { createMessage } = useMessages()
	const [isSendAvaliable, setIsSendAvalible] = useState<boolean>(false)

	const onTextFieldKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		
		if (!event.ctrlKey && event.code === 'Enter') {
			event.preventDefault()
			sendMessage()
			setIsSendAvalible(false)

		} else if (event.ctrlKey && event.code === 'Enter') {
			event.currentTarget.value += '\n'
			
		}

	}

	const onTextAreaChange = () => {
		if (inputRef.current?.value) setIsSendAvalible(true)
		else setIsSendAvalible(false)
	}

	const sendMessage = () => {
		if (inputRef.current?.value) {
			const message = { message: inputRef.current.value, chatId }
			createMessage(message)

			inputRef.current.value = ''
		}
	}


	return (
		<footer className="user-input">
			<textarea onKeyDown={onTextFieldKeyPress} onChange={onTextAreaChange} ref={inputRef} className="user-input__text" placeholder='Введите сообщение' />
			<button onClick={sendMessage} className='user-input__send input-btn' style={{ visibility: isSendAvaliable ? 'visible' : 'hidden' }}>
				<img src={send} alt="" />
			</button>
		</footer>
	)
}