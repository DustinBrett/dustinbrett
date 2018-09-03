import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';

import controllers from '../controllers';
import { fallbackErrorHandler } from '../utilities/error';

export default class ApiServer {
  public express: express.Application;
  private port: number;

  constructor(base_uri: string = '', port: number = 8080) {
    this.express = express();
    this.port = port;

    // Request
    this.express.use(cors({ methods: ['GET', 'POST'] }));
    this.express.use(compression());

    // Headers
    this.express.disable('x-powered-by');

    // Controllers
    this.express.use(base_uri, controllers());

    // Error handling
    this.express.use(fallbackErrorHandler);
  }

  public start(): void {
    this.express.listen(this.port, () => console.log(`Listening @ http://localhost:${ this.port }`));
  }
}
