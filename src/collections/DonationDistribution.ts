import type { CollectionConfig } from 'payload'

const DonationDistribution: CollectionConfig = {
  slug: 'donation-distribution',
  admin: {
    useAsTitle: 'SponseeName',
  },
  fields: [
    {
      name: 'SponseeName',
      type: 'relationship',
      relationTo: 'sponsees',
      hasMany: false,
      required: true
    },
    {
      name: 'DonationGivenAmount',
      type: 'number',
      required: true,
    },
    {
      name: 'DistributionType',
      type: 'select',
      options: [
        { label: 'Monthly Donation', value: "Monthly Donation" },
        { label: 'Special Gift', value: "Special Gift" },
        { label: 'Medical', value: "Medical" },
        { label: 'Other', value: "Other" },

      ],
      required: true

    },
    {
      name: 'Description',
      type: 'text',
    },
    {
      name: 'DonationGivenDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    }
  ],
};

export default DonationDistribution;
