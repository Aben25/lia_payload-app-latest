import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Sponsees from './collections/Sponsees'
import Sponsors from './collections/Sponsors'
import GradeReports from './collections/GradeReports' 
import { s3Storage } from '@payloadcms/storage-s3'
import Gallery from './collections/Gallery'
import slugify from 'slugify' // You might need to install this package: npm install slugify
import Projects from './collections/Projects'
import ProjectsStatus from './collections/ProjectsStatus'
import Documents from './collections/Documents'
import DonationCollection from './collections/DonationCollection'
import DonationDistribution from './collections/DonationDistribution'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const sanitizeFilename = (filename: string): string => {
  // Remove the file extension
  const parts = filename.split('.')
  const ext = parts.pop()
  const name = parts.join('.')

  // Sanitize the filename
  const sanitized = slugify(name, { lower: true, strict: true })

  // Reattach the extension
  return `${sanitized}.${ext}`
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Sponsees, Sponsors, Gallery, Projects, ProjectsStatus, Documents, DonationCollection, DonationDistribution, GradeReports],
  editor: lexicalEditor(),
  secret: '999a184aee931b24ea650729',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: 'postgresql://postgres.ntckmekstkqxqgigqzgn:XPyeJd0BCLFrNq38@aws-0-us-west-1.pooler.supabase.com:6543/postgres',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
          generateFileURL: ({ filename }) =>
            `https://Media.s3.amazonaws.com/media/${sanitizeFilename(filename)}`,
        },
       
      },
      bucket: 'Media',
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId: '94c26e9b5a379acc48142f9c7498f973',
          secretAccessKey: '03b9c7e3a22515e889d93d4d5820ac903c3a450490eca7027db515fe8438d6c4',
        },
        region: 'us-west-1',
        endpoint: 'https://ntckmekstkqxqgigqzgn.supabase.co/storage/v1/s3',
      },
    }),
  ],
})
