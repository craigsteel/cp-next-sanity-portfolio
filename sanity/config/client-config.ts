import { apiVersion, dataset, projectId, cloudinaryApiKey, cloudinaryName} from '../../sanity/sanity.api'

const config = {
  projectId,
  dataset,
  apiVersion,
  cloudinaryApiKey,
  cloudinaryName,

  useCdn: true,
};

export default config