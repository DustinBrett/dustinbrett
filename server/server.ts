import ApiServer from './services/api';

import { BASE_URI, PORT } from './config';

const server = new ApiServer(BASE_URI, PORT);

server.start();
