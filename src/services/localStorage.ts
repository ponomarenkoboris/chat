export type Data = { idInstance: string, apiTokenInstance: string }

export default class LocalStorage {

	static save(data: Data): void {
		localStorage.setItem('appData', JSON.stringify(data))
	}

	static get(): Data | null {
		const data = localStorage.getItem('appData')
		return data && JSON.parse(data)
	}

	static remove(): void {
		localStorage.removeItem('appData')
	}
}