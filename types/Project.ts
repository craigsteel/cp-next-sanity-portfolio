import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    number: string;
    name: string;
    slug: string;
    projectImage: string;
    image: string;
    imagetwo: string;
    imagethree: string;
    mobile: string;
    alt: string;
    url: string;
    content: PortableTextBlock[];
    cloudinary: PortableTextBlock[];
    adobeXD: string;
};