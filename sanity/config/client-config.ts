import { apiVersion, dataset, projectId } from '../../sanity/sanity.api'

const config = {
	projectId: projectId || '',
  dataset: dataset || '',
  apiVersion: apiVersion || '',
  useCdn: true,
};

export default config