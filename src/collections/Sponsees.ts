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
      name: 'JoinedSponsorshipProgram',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'Family',
      type: 'textarea',
      admin: {
        description: 'A brief description of family situtation',
      },
    },
    {
      name: 'Grade',
      type: 'number',
    },
    {
      name: 'Education',
      type: 'text',
    },
    {
      name: 'Aspiration',
      type: 'text',
    },
    {
      name: 'Hobby',
      type: 'text',
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
      name: 'About',
      type: 'textarea',
      admin: {
        description: 'A brief biography of the sponsee',
      },
    },
    {
      name: 'HowSponsorshipWillHelp',
      type: 'textarea',
      admin: {
        description: 'A brief description how sponsorship helps the sponsee',
      },
    },

  ],
};

export default Sponsees;
