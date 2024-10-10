import { CollectionConfig } from 'payload';

const Sponsees: CollectionConfig = {
  slug: 'sponsees',
  admin: {
    useAsTitle: 'FullName',
  },
  fields: [
    {
      name: 'FullName',
      type: 'text',
      required: true,
    },
    {
      name: 'DateOfBirth',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'Gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'Location',
      type: 'text',
    },
    {
      name: 'AcademicProgress',
      type: 'textarea',
    },
    {
      name: 'LastMessage',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'ProfilePicture',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'Gallery',
      type: 'relationship',
      relationTo: 'gallery',
    },
    {
      name: 'Milestones',
      type: 'textarea',
    },
    {
      name: 'ContributionsUsedFor',
      type: 'textarea',
    },
    {
      name: 'SponsorshipDuration',
      type: 'number',
      admin: {
        description: 'Duration in months',
      },
    },
    {
      name: 'DonatedAmount',
      type: 'number',
      admin: {
        step: 0.01,
        description: 'Total amount donated in USD',
      },
    },
    {
      name: 'LastUpdate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
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
    {
      name: 'Bio',
      type: 'textarea',
      admin: {
        description: 'A brief biography of the sponsee',
      },
    },
  ],
};

export default Sponsees;
