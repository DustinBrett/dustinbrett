import { connect, connection, Mongoose } from 'mongoose';

import { fallbackErrorHandler } from '../utilities/error';

export default class DbClient {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  public connect(): Promise<Mongoose> {
    connection.on('error', fallbackErrorHandler);

    return connect(this.uri);
  }
}
