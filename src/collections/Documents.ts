import type { CollectionConfig } from 'payload'

const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'ChildName',
  },
  fields: [
    {
      name: 'ChildName',
      type: 'relationship',
      relationTo: 'sponsees',
      hasMany: false,
      required: true
    },
    {
      name: 'UploadedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'DocumentsType',
      type: 'select',
      options: [
        { label: 'Education', value: "Education" },
        { label: 'Medical', value: "Medical" },
        { label: 'LIA Related Forms', value: "LIA Related Forms" },
        { label: 'Other', value: "Other" },

      ],
      required: true

    },
    {
      name: 'Description',
      type: 'text',
    },
    {
      name: 'AmharicScore',
      type: 'number',
    },
    {
      name: 'Documents',
      type: 'array',
      fields: [
        {
          name: 'document',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    
  ],
};

export default Documents;
