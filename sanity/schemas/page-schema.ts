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
        name: 'showcaseProjects',
        title: 'Showcase projects',
        description:
            'These are the projects that will appear first on your landing page.',
        type: 'array',
        of: [
            {
            type: 'reference',
            to: [{ type: 'project' }],
            },
        ],
        },
    ],
}

export default page