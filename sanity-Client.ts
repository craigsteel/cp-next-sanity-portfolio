import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from './sanity/sanity.api'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'craig Parfitt UI/UX Design Portfolio'



// This type parameter enables the client to be aware of your generated types
//                           👇👇👇
export const client = createClient({

  projectId,
  dataset,
  apiVersion,

});