import type { CollectionConfig } from 'payload'

const GradeReports: CollectionConfig = {
  slug: 'grade-reports',
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
      name: 'Grade',
      type: 'number',
      required: true,
    },
    {
      name: 'AcademicYear',
      type: 'number',
      required: true,
    },
    {
      name: 'Semester',
      type: 'select',
      options: [
        { label: '1st Semester', value: "1" },
        { label: '2nd Semester', value: "2" },
      ],
      required: true

    },
    {
      name: 'MathsScore',
      type: 'number',
    },
    {
      name: 'AmharicScore',
      type: 'number',
    },
    {
      name: 'EnglishScore',
      type: 'number',
    },
    {
      name: 'ScienceScore',
      type: 'number',
    },
    {
      name: 'GamoScore',
      type: 'number',
    },
    {
      name: 'Rank',
      type: 'number',
      required: true,
    },
    {
      name: 'AcademicProgressNote',
      type: 'textarea',
    }
  ],
};

export default GradeReports;
