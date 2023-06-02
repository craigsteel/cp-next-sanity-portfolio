import { PortableTextBlock } from "sanity";

export type Project = {
  type: string;
	_id: string;
	_createdAt: Date;
	cloudinary: PortableTextBlock[];
	number: string;
	name: string;
	slug: string;
	image: string;
	mobile: string;
	alt: string;
	url: string;
	content: PortableTextBlock[];
};