import configureUrl from "./configureUrl"

type NotificationBody = {
	"typeWebhook": string,
	"instanceData": {
		"idInstance": number,
		"wid": string,
		"typeInstance": string
	},
	"timestamp": number,
	"idMessage": string,
	"senderData": {
		"chatId": string,
		"chatName": string,
		"sender": string,
		"senderName": string
	},
	"messageData": {
		"typeMessage": string,
		"textMessageData": {
			"textMessage": string
		}
	}
}
export type Notification = { receiptId: number, body: NotificationBody }
const fetchNotifications = async (contorller: AbortController): Promise<Notification> => {
	try {
		const response = await fetch(configureUrl('receiveNotification'), { signal: contorller.signal });
		const data = await response.json() as Notification
		return data
	} catch (error) {
		throw new Error('Something went wrong while getting notification.')
	}
}

const deleteNotifications = async (receiptId: number): Promise<void> => {
	try {
		const config = { method: "DELETE" }
		const response = await fetch(configureUrl('deleteNotification') + receiptId, config)
		const { result } = await response.json()
		return result
	} catch (error) {
		throw new Error('Something went wrong during delete notification.')
	}
}

export default function receiveNotifications (
	callback: (notification: Notification) => void, 
	contorller: AbortController
): ReturnType<typeof setInterval> {
	let isProccessing = false;

	const intervalId = setInterval(async () => {
		if (isProccessing) return;

		isProccessing = true

		try {
			const response = await fetchNotifications(contorller)

			if (!response) {
				isProccessing = false
				return
			}

			if (response.body.messageData.typeMessage === 'textMessage') {
				callback(response);
			}

			await deleteNotifications(response.receiptId);

			isProccessing = false

		} catch (error) {
			console.error(error)
		}
	}, 3000)

	return intervalId
}