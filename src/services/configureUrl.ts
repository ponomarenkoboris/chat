import LocalStorage from "./localStorage"

type UrlConfig = 'getChats' | 'getChatHistory' | 'sendMessage' | 'receiveNotification' | 'deleteNotification'

const configureUrl = (type: UrlConfig) => {
	const data = LocalStorage.get()

	if (!data) throw new Error('Not authorized')

	const { idInstance, apiTokenInstance } = data
	return `https://api.green-api.com/waInstance${idInstance}/${type}/${apiTokenInstance}/`
}

export default configureUrl;