const page = {
    name: 'page',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            name: 'cloudinary',
            title: 'Cloudinary Video',
            description: 'This asset is served from Cloudinary',
            type: 'array',
            of: [
                {
                    type: "cloudinary.asset",
                    name: "name",
                    title: "title",
                    description: "description",
                },
            ],
        },
    ],
}

export default page