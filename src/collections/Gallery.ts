import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'sponsee',
      type: 'relationship',
      relationTo: 'sponsees',
      required: true,
    },
    {
      name: 'media',
      type: 'array',
      label: 'Media Items',
      fields: [
        {
          name: 'mediaType',
          type: 'radio',
          options: [
            {
              label: 'Image',
              value: 'image',
            },
            {
              label: 'Video',
              value: 'video',
            },
          ],
          defaultValue: 'image',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, { mediaType }) => mediaType === 'image',
          },
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, { mediaType }) => mediaType === 'video',
          },
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}

export default Gallery
