import type { CollectionConfig } from 'payload'

const Sponsees: CollectionConfig = {
  slug: 'sponsees',
  admin: {
    useAsTitle: 'fullName',
  },
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
      name: 'bio',
      type: 'textarea',
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
      name: 'sponseeGallery',
      type: 'relationship',
      relationTo: 'gallery',
    },

  ],
  timestamps: true,
}

export default Sponsees
