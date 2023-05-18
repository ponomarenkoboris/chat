import { Header } from '..';
import { Messages, UserInput } from '../../shared';
import './Main.scss';

export const Main = () => {
	return (
		<div className="main">
			<Header />
			<Messages />
			<UserInput />	
		</div>
	)
}