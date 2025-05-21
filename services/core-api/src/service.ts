import express from 'express';
import routes from './routes/route.js';
import { config } from 'dotenv';
config();

const service = express();
const port = process.env.PORT || 3001;

service.use('/', routes);

service.listen(port, () => {
  console.log('Core API service running');
});
