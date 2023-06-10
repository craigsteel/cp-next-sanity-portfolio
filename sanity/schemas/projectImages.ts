import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
	name: 'projectImages',
	title: 'Project Images',
	type: 'document',
	icon: ImageIcon,
	fields: [
  defineField({
		name: 'name',
		title: 'title',
		type: 'string',
		description: 'Clients Name',
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
			description: 'Project Images',
			options: { hotspot: true},
			fields: [
				defineField({
				name: 'alt',
				title: 'Alt text',
				type: 'string',
				})
			],
		}),
	],
})