import { connect, connection, Mongoose } from 'mongoose';

import { errorHandler } from '../utilities/error';

export default class DbClient {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  public connect(): Promise<Mongoose> {
    connection.on('error', errorHandler);
    connection.on('open', () => console.log(`DB: Connected @ ${ this.uri }`));

    return connect(this.uri, { useNewUrlParser: true });
  }
}
