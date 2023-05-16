import { Header } from '..'
import { Chat } from '../../shared/index'
import './Sidebar.scss';

export const Sidebar = () => {
	return (
		<div className="sidebar">
			<Header />
			<Chat />
		</div>
	)
}