import { NewsFeedDateRange } from "./NewsFeedDateRange"

export type NewsFeedItem = {
	id: string,
	text: string,
	link?: string,
	textCol?: string,
	bgCol?: string,
	createdAt: Date,
	isShow:boolean,
}
