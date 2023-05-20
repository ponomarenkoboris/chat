import { bindActionCreators } from "@reduxjs/toolkit";
import { allChatActionCreators } from "@store/chat/chatSlice";
import { useStoreDispatch } from "@store/index";

export default function useChat() {
	const dispatch = useStoreDispatch()
	const actions = allChatActionCreators()
	return bindActionCreators(actions, dispatch)
}