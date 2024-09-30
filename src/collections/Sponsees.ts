import type { CollectionConfig } from 'payload'

const Sponsees: CollectionConfig = {
  slug: 'sponsees',
  fields: [
    {
      name: 'fullName',
      type: 'text',
      admin: {
        description: 'Enter the full name of the sponsee',
      },
    },
    {
      name: 'gender',
      type: 'select',
      options: ['Male', 'Female'],
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'grade',
      type: 'select',
      options: ['KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
    {
      name: 'aspiration',
      type: 'text',
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'dateOfBirth',
      type: 'date',
    },
    {
      name: 'profile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'parentInfo',
      type: 'select',
      options: ['Mother & Father', 'Mother', 'Father', 'Guardian'],
    },

    {
        name: 'Gallery',
        type: 'upload', // required
        relationTo: 'media', // required
        maxDepth: 1
        ,
      },
  ],
  timestamps: true,
}

export default Sponsees
