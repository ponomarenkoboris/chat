import { Sidebar, Main, Login } from './components/layout'
import './App.scss'

function App() {
	const isLoggedIn = true
	return isLoggedIn ? (
		<div className='app'>
			<Sidebar />
			<Main />
		</div>
	) : <Login />
}

export default App
