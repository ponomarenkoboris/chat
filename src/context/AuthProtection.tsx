import { ReactNode, createContext, useState } from "react";
import { Login } from "@layout/index";
import LocalStorage, { Data } from "@services/localStorage";

type AuthProtectionContextType = {
	login: (data: Data) => void,
	logout: () => void
}

const AuthProtectionContext = createContext<AuthProtectionContextType>({} as AuthProtectionContextType)

type AuthProtectionProps = {
	children: ReactNode
}

const AuthProtection = ({ children }: AuthProtectionProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!LocalStorage.get())

	const login = (data: Data) => {
		LocalStorage.save(data)
		setIsLoggedIn(true)
	}
	
	const logout = () => {
		LocalStorage.remove()
		setIsLoggedIn(false)
	}

	return <AuthProtectionContext.Provider value={{ login, logout }}>{isLoggedIn ? children : <Login />}</AuthProtectionContext.Provider>
}

export {
	AuthProtectionContext,
	AuthProtection
}