import { cloudinaryApiSecret, apiVersion, dataset, projectId, cloudinaryApiKey, cloudinaryName} from '../../sanity/sanity.api'

const config = {
  projectId,
  dataset,
  apiVersion,
  cloudinaryApiKey,
  cloudinaryName,
  cloudinaryApiSecret,

  useCdn: true,
};

export default config