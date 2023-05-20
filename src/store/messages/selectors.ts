import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const chatMessages = (state: RootState) => state.messages.messages

export const chatMessagesSelector = createSelector([chatMessages], (messages) => messages)