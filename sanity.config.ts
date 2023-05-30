import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

const config = defineConfig({

  title: 'craig Parfitt New Portfolio',
  projectId: 'slsisqvg',
  dataset: 'production',
  apiVersion: '2023-05-27',

  basePath: '/studio',

  plugins: [deskTool()],
  schema: { types: schemas }

})

export default config;