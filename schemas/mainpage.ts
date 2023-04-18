import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'mainpage',
    title: 'Main Page',
    icon: HomeIcon,
    type: 'document',
    preview: { select: { title: 'title', subtitle: 'subtitle' } },
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        description: 'This field provide main goal of the company',
        type: 'string',
        validation: rule => rule.max(40).required(),
      }),
      defineField({
        name: 'subtitle',
        title: 'Subtitle',
        description: 'One sentence about the company',
        type: 'string',
        validation: rule => rule.max(100).required(),
      })
    ]
})