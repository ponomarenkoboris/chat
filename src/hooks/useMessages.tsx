import { bindActionCreators } from "@reduxjs/toolkit";
import { allMessagesActionCreators } from "@store/messages/messageSlice";
import { useStoreDispatch } from "@store/index";

export default function useMessages() {
	const actions = allMessagesActionCreators()
	const dispatch = useStoreDispatch()
	return bindActionCreators(actions, dispatch)
}