import type { CollectionConfig } from 'payload'

const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'firstPaymentDate',
      type: 'date',
      required: true,
    },
    {
      name: 'lastPaymentDate',
      type: 'date',
      required: true,
    },
    {
      name: 'language',
      type: 'select',
      options: ['EN', 'AM'],
      required: true,
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'postalCode',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
    },
    {
      name: 'region',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'sponsee',
      type: 'relationship',
      relationTo: 'sponsees',
      hasMany: false,
    },
  ],
};

export default Sponsors;
