import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),

		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),

		defineField({
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{
				type: 'block',
			}],
		}),

		defineField({
		name: 'listProjects',
		title: 'Project list',
		description: 'Displayed all projects.',
		type: 'array',
			of: [
				{
				title: 'Reference',
				type: 'reference',
				to: [
					{
					type: 'project',
					},
				],
				},
			],
		}),

	]
})
