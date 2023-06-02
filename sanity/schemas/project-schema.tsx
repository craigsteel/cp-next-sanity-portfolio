const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
		name: 'name',
		title: 'Name',
		type: 'string'
	  },
    {
		name: 'number',
		title: 'Number',
		type: 'string'
    },
    {
		name: 'slug',
		title: 'Slug',
		type: 'slug',
		options: { source: 'name' }
	  },
    {
		name: 'image',
		title: 'Image',
		type: 'image',
		options: { hotspot: true },
			fields: [
				{
				name: 'alt',
				title: 'Alt',
				type: 'string'
				}
			]
    },
    {
		name: 'mobile',
		title: 'Mobile',
		type: 'image',
			options:
			{
				hotspot: true
			},
			fields: [
				{
				name: 'alt',
				title: 'Alt',
				type: 'string'
			}
		]
    },
    {
		name: 'url',
		title: 'URL',
		type: 'url',
	  },
	  {
		  name: 'adobeXD',
		  title: 'Adobe XD Link',
		  type: 'url',
		  description: 'This is a link to the Adobe XD Mockup'
	  },
	{
		name: 'content',
		title: 'Content',
		type: 'array',
			of: [
				{
				type: 'block',
				}
			]
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
	]
}

export default project;