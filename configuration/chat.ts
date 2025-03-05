import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Welcome! I’m ${AI_NAME}, your AI real estate guide. The key to a great home? Location, location… and a solid Wi-Fi signal!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Looks like we’ve hit our word limit! Let’s take a quick breather, let me know when you're ready to continue!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
