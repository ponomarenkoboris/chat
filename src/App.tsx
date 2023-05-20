import { Sidebar, Main } from '@layout/index'
import { AuthProtection } from '@context/AuthProtection'
import './App.scss'

function App() {
	return (
		<AuthProtection>
			<div className='app'>
				<Sidebar />
				<Main />
			</div>
		</AuthProtection>
	)
}

export default App
