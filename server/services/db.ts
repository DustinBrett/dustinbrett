import { connect, connection, Mongoose } from 'mongoose';

import { logError } from '../utilities/error';

export default class DbClient {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  public connect(): Promise<Mongoose> {
    connection.on('error', logError);
    connection.on('open', () => console.info(`DB: Connected @ ${ this.uri }`));

    return connect(this.uri, { useNewUrlParser: true });
  }
}
