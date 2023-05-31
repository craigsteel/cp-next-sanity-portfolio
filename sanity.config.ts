import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { apiVersion, dataset, projectId } from './sanity/sanity.api'
import schemas from "./sanity/schemas"
import {cloudinaryAssetSourcePlugin, cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'craig Parfitt UI/UX Design Portfolio'

const config = defineConfig({

  projectId: projectId || '',
  dataset: dataset || '',
  title,

  apiVersion: apiVersion || '',
  useCdn: true,

  basePath: '/studio',

  plugins: [
    deskTool(),

    cloudinaryAssetSourcePlugin(),
    /*...*/
    cloudinarySchemaPlugin(),
  ],

  schema: { types: schemas }

})

export default config;