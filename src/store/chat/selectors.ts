import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';

const chats = (state: RootState) => state.chat.chats;
const filterBy = (state: RootState) => state.chat.filterBy;
const activeChat = (state: RootState) => state.chat.activeChat;


export const activeChatSelector = createSelector([activeChat], (chat) => chat);
export const filteredChatsSelector = createSelector(
	[chats, filterBy],
	(chats, filterBy) => {

		if (filterBy) {
			const result = {
				filterBy,
				chats: chats.filter(chat => chat.name ? chat.name.toLowerCase().includes(filterBy.toLowerCase()) : chat.id.toLowerCase().includes(filterBy.toLowerCase()))
			}
			return result
		} else {
			return { filterBy, chats }
		}
	}
)