import { ReactNode } from 'react';
import defaultUser from '@assets/shared/default-user.jpg';
import './Header.scss';

interface HeaderProps {
	username: string,
	avatar?: string,
	children?: ReactNode
}

export const Header = ({ username, avatar, children }: HeaderProps) => {
	return (
		<header className='header'>
			<div className="header__user">
				<button className="user__avatar">
					<img src={avatar || defaultUser} alt={username} />
				</button>
				<p className='user__username'>{username}</p>
			</div>
			{children}
		</header>
	)
}