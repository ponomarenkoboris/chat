import menuIcon from '../../../assets/menu.svg'
import defaultUser from '../../../assets/default-user.jpg'
import './Header.scss';

type HeaderOption = {
	src: string,
	onClick?: () => void
}

interface HeaderProps {
	options?: HeaderOption[]
}

// TODO append options insertion
export const Header = ({ options }: HeaderProps) => {
	return (
		<header className='header'>
			<button className="header__user">
				<img src={defaultUser} alt="username" />
			</button>
			<div className="header__options">
				{/* {options.map(({ src, onClick }) => <button className='option__item'></button>)} */}
				<button className='option__item options__menu'>
					<img src={menuIcon} alt="" />
				</button>
			</div>
		</header>
	)
}