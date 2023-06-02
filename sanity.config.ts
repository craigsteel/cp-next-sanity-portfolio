import { defineConfig } from "sanity"
import { visionTool } from '@sanity/vision'
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"
import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY!;

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'craig Parfitt UI/UX Design Portfolio'

const config = defineConfig({
  title,
  projectId,
  dataset,
  apiVersion,
  cloudinaryApiKey,
  cloudinaryName,

  useCdn: true,

  basePath: '/studio',

  plugins: [
    deskTool(), visionTool(),

    cloudinaryAssetSourcePlugin(),
    /*...*/
    cloudinarySchemaPlugin(),
  ],

  schema: { types: schemas }

})

export default config;

