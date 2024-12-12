import type { CollectionConfig } from 'payload'

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'ProjectTitle',
  },
  fields: [
    {
      name: 'ProjectTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'ProjectType',
      type: 'select',
      options: [
        { label: 'Children and Youth Center', value: "Children and Youth Center" },
        { label: 'Feeding Program', value: "Feeding Program" },
        { label: 'Education and Mentorship', value: "Education and Mentorship" },
        { label: 'Electricity and Water Installation', value: "Electricity and Water Installation" },
        { label: 'Other', value: "Other" },


      ],
      required: true

    },
    {
      name: 'Goal',
      type: 'textarea',
      admin: {
        description: 'The goal of the project:',
      },
    },
    {
      name: 'Impact',
      type: 'textarea',
      admin: {
        description: 'The impact of the project:',
      },
    },
    {
      name: 'ProjectProfilePicture',
      type: 'upload',
      relationTo: 'media',
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

export default Projects;
