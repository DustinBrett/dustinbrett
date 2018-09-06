import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';

import controllers from '../controllers';
import { errorHandler } from '../utilities/error';

export default class ApiServer {
  private express: express.Application;
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

    // Error Handling
    this.express.use(errorHandler);
  }

  public start(): void {
    this.express.listen(this.port, () => {
      console.info(`API: Listening @ http://localhost:${ this.port }`);
    });
  }
}
