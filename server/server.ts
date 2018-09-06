import DbClient from './services/db';
import ApiServer from './services/api';

import { migrateDb } from './utilities/migration';

import { BASE_URI, PORT, MONGODB_URI, MONGODB_INIT } from './config';

const db = new  DbClient(MONGODB_URI);
const server = new ApiServer(BASE_URI, PORT);

db.connect().then(() => {
  migrateDb(MONGODB_INIT);
  server.start();
});
