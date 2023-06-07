import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export default defineType({
	name: 'projectImage',
	title: 'Project Images',
	type: 'document',
	icon: ImageIcon,
	fields: [
  defineField({
		name: 'name',
		title: 'Name',
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
			name: 'title',
			title: 'Title',
			type: 'image',
			description: 'Project Image',
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