import DbClient from './services/db';
import ApiServer from './services/api';

import { BASE_URI, PORT, MONGODB_URI } from './config';

const db = new DbClient(MONGODB_URI);
const server = new ApiServer(BASE_URI, PORT);

db.connect().then(server.start);
