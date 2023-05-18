import { ChangeEvent, useState, useRef } from 'react';
import searchIcon from '../../../../assets/search.svg'
import './ChatSearch.scss';

export const ChatSearch = () => {
	const [isCancelable, setIsCancelable] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value)

		if (event.currentTarget.value) {
			setIsCancelable(true)
		}
	}

	const onClose = () => {
		if (inputRef.current?.value) inputRef.current.value = ''
		setIsCancelable(false)
	}

	return (
		<div className="chat-search">
			<label className="search__wrapper">
				<img src={searchIcon} className='search__icon' alt="Search" />
				<input type="text" placeholder='Поиск или новый чат' ref={inputRef} onChange={onChange} className="search__input" />
				{isCancelable && <button className='search__cancel' onClick={onClose}></button>}
			</label>
			<button className='search__options'></button>
		</div>
	)
}