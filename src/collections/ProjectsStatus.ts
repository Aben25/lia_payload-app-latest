import type { CollectionConfig } from 'payload'

const ProjectsStatus: CollectionConfig = {
  slug: 'projects-status',
  admin: {
    useAsTitle: 'ProjectTitle',
  },
  fields: [
    {
      name: 'ProjectTitle',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: false,
      required: true
    },
    {
      name: 'Description',
      type: 'textarea',
      admin: {
        description: 'Describe the current status of the project in detail:',
      },
      required: true,
    },
    {
      name: 'Progress',
      type: 'select',
      options: [
        { label: 'Started', value: "Started" },
        { label: 'In Progress', value: "In Progress" },
        { label: 'Completed', value: "Completed" },
        { label: 'Other', value: "Other" },
      ],
      required: true

    },
    {
      name: 'UpdatedBy',
      type: 'text',
      admin: {
        description: 'The goal of the project:',
      },
    },
    {
      name: 'LastUpdatedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'ProjectStatusProfilePicture',
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

export default ProjectsStatus;
