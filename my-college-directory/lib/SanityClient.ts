import { createClient} from '@sanity/client' ;


const sanityConfig = {
  projectId: '0jnnl7qh',
  dataset: 'production',
  useCdn: true, // Enable this for production deployment
};

export const sanityClient = createClient(sanityConfig);

