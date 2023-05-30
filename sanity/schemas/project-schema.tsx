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
		name: 'url',
		title: 'URL',
		type: 'url',
    },
    {
		name: 'content',
		title: 'Content',
		type: 'array',
			of: [
				{
					type: 'block',
			      styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
						{title: 'H4', value: 'h4'},
						{title: 'H5', value: 'h5'},
						{title: 'H6', value: 'h6'},
						{title: 'Quote', value: 'blockquote'}
					]
				}
			]
    }
  ]
}

export default project;