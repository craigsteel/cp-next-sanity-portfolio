import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
	fields: [
  defineField({
		name: 'name',
		title: 'Name',
		type: 'string',
		description: 'Clients Name',
	}),

	defineField({
		name: 'number',
		title: 'Number',
		type: 'string',
		description: 'Number order',
	}),

	defineField({
		name: 'slug',
		title: 'Slug',
		type: 'slug',
			options: {source: 'name'},
	}),

	defineField({
		name: 'image',
		title: 'Image',
		type: 'image',
		description: 'Main Banner Image',
			options: {hotspot: true },
				fields: [{
				name: 'alt',
				title: 'Alt',
				type: 'string'
				}],
	}),

		defineField({
		name: 'listProjectImages',
		title: 'List Project Images',
		description: 'Displayed all Images for the project.',
		type: 'array',
			of: [{
				title: 'Reference',
				type: 'reference',
				to: [{
					type: 'projectImages',
				}],
				},
			],
		}),

	defineField({
		name: 'imagetwo',
		title: 'Image Two',
		type: 'image',
		description: 'Project page Story Second Image',
			options: { hotspot: true },
				fields: [{
				name: 'alt',
				title: 'Alt',
				type: 'string',
			}],
	}),

	defineField({
		name: 'imagethree',
		title: 'Image Three',
		type: 'image',
		description: 'Project page Story Third Image',
			options: {hotspot: true},
			fields: [{
				name: 'alt',
				title: 'Alt',
				type: 'string',
				}],
	}),

	defineField({
		name: 'mobile',
		title: 'Mobile',
		type: 'image',
		description: 'Mobile Image',
			options: {hotspot: true},
			fields: [{
				name: 'alt',
				title: 'Alt',
				type: 'string',
				}],
	}),

	defineField({
		name: 'url',
		title: 'URL',
		type: 'url',
		description: 'Link to the real site',
	}),

	defineField({
		name: 'adobeXD',
		title: 'Adobe XD Link',
		type: 'url',
		description: 'This is a link to the Adobe XD Mockus'
	 	}),

	defineField({
		name: 'content',
		title: 'Content',
		type: 'array',
		description: 'Short description of the Web type, brief and role',
			of: [{
				type: 'block'
			}],
	}),

	],
})