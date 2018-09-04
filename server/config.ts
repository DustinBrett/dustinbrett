import { environment } from '../src/environments/environment';

const

    VERSION = '1',

    MONGODB_SERVER = 'mongodb://localhost:27017',

    MONGODB_PROD_DB = 'dustinbrett',
    PROD_PORT = 80,

    MONGODB_DEV_DB = 'dustinbrett_dev',
    DEV_PORT = 3010

;

export const

  BASE_URI = `/v${ VERSION }`,
  PORT = environment.production ? PROD_PORT : DEV_PORT,

  MONGODB_URI = `${ MONGODB_SERVER }/${ environment.production ? MONGODB_PROD_DB : MONGODB_DEV_DB }`

;
