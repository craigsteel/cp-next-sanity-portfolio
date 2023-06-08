import { PortableTextBlock } from "sanity";

export type Video = {
	_id: string;
	_createdAt: Date;
	title: string;
    name: string;
    slug: string;
    image: string;
    alt: string;
    url: string;
    cloudinary: PortableTextBlock[];
};