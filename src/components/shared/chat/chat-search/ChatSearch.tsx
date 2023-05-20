import { ChangeEvent, useState, useRef } from 'react';
import useChat from '@hooks/useChat';
import searchIcon from '@assets/shared/search.svg';
import './ChatSearch.scss';

export const ChatSearch = () => {
	const { setFilterValue } = useChat();
	const [isCancelable, setIsCancelable] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilterValue(event.currentTarget.value)
		
		if (event.currentTarget.value) {
			setIsCancelable(true)
		}
	}

	const onCancel = () => {
		if (inputRef.current) inputRef.current.value = ''
		setFilterValue('')
		setIsCancelable(false)
	}

	return (
		<div className="chat-search">
			<label className="search__wrapper">
				<img src={searchIcon} className='search__icon' alt="Search" />
				<input type="text" placeholder='Поиск или новый чат' ref={inputRef} onChange={onChange} className="search__input" />
				{isCancelable && <button className='search__cancel' onClick={onCancel}></button>}
			</label>
			<button className='search__options'></button>
		</div>
	)
}