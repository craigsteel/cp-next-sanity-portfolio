import { PortableTextBlock } from "sanity";

export type Project = {
	_id: string;
	_createdAt: Date;
	number: string;
	name: string;
	slug: string;
	image: string,
	mobile: string;
	url: string,
	content: PortableTextBlock[]
};