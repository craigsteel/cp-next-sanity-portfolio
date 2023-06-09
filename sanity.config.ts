import { defineConfig } from "sanity"
import { visionTool } from '@sanity/vision'
import { deskTool } from "sanity/desk"
import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'
import schemas from "./sanity/schemas/schema";


const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const cloudinaryName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY!;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET!;

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
  cloudinaryApiSecret,

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

