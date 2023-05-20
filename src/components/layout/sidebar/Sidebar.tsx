import { useContext } from 'react';
import { Header } from '..';
import { Chat } from '@shared/index';
import { AuthProtectionContext } from '@context/AuthProtection';
import LocalStorage from '@services/localStorage';
import './Sidebar.scss';

export const Sidebar = () => {
	const { logout } = useContext(AuthProtectionContext);

	const onMenuButtonClick = () => {
		logout()
	}

	return (
		<div className="sidebar">
			<Header username={LocalStorage.get()?.idInstance || ''}>
				<div className="header__options">
					<button className='option__item' onClick={onMenuButtonClick}>
						Выйти
					</button>
				</div>
			</Header>
			<Chat />
		</div>
	)
}