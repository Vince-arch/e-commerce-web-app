import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

require('dotenv').config();

const client = createClient({
    projectId: 'd5rukfw3',
    dataset: 'production',
    apiVersion: '2024-3-19',
    useCdn: true,
    token: process.env.PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;