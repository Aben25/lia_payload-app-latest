import type { CollectionConfig } from 'payload'

const DonationCollection: CollectionConfig = {
  slug: 'donation-collection',
  admin: {
    useAsTitle: 'SponsorName',
  },
  fields: [
    {
      name: 'SponsorName',
      type: 'relationship',
      relationTo: 'sponsors',
      hasMany: false,
      required: true
    },
    {
      name: 'DonationAmount',
      type: 'number',
      required: true,
    },
    {
      name: 'DonationType',
      type: 'select',
      options: [
        { label: 'Monthly Donation', value: "Monthly Donation" },
        { label: 'Yearly Donation', value: "Yearly Donation" },
        { label: 'Youth Center', value: "Youth Center" },
        { label: 'Special Gift', value: "Special Gift" },
        { label: 'General', value: "General" },
        { label: 'Admin Cost Cover', value: "Admin Cost Cover" },
        { label: 'Other', value: "Other" },
      ],
      required: true

    },
    {
      name: 'Description',
      type: 'text',
    },
    {
      name: 'DonationDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    }
  ],
};

export default DonationCollection;
