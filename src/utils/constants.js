import {AppConfig} from 'blockstack';

export const appConfig = new AppConfig(['store_write', 'publish_data'])
// store_write grants write access
// store_write grants read access to others

export const POST_FILENAME = 'posts.json'
