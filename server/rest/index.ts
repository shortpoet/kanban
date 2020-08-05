import * as express from 'express';
import { createConnection } from '../test/factories/node_modules/typeorm';
import { projects } from './projects';

(async () => {
  const connection = await createConnection();
  console.log('test');

  console.log(`name ${connection.name}`);
  for (let key in connection.options) {
    console.log(`key: ${key}, value: ${connection.options[key]}`);

  }
  const app = express();
  app.use('/projects', projects);

  process.env.DOCKER == '1'
    ? await app.listen(5000)
    : await app.listen(5000)
})();