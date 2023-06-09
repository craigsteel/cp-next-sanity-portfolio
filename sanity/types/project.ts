import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    number: string;
    name: string;
    slug: string;
    image: string;
    projectImages: string;
    listProjectImages: string;
    imagetwo: string;
    imagethree: string;
    mobile: string;
    alt: string;
    url: string;
    content: PortableTextBlock[];
    adobeXD: string;
};