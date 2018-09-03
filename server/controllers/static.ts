import { Router, static as staticFiles } from 'express';

import { isProduction } from '../config';

export default isProduction ? undefined : {

  path: '/static',

  handler: ((): Router => Router().use(staticFiles('static')))()

};
