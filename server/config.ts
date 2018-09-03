const

    VERSION = '1',

    PROD_PORT = 80,
    DEV_PORT = 3010

;

export const

  isProduction = [ process.env.NODE_ENV, ...process.argv ].includes('production'),

  BASE_URI = `/v${ VERSION }`,
  PORT = isProduction ? PROD_PORT : DEV_PORT,

  MONGODB_URI = `mongodb://localhost:27017/${ isProduction ? 'dustinbrett' : 'dustinbrett_dev' }`

;
