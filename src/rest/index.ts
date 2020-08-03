import * as express from 'express';
import { createConnection } from 'typeorm';
import { projects } from './projects';

(async () => {
  const connection = await createConnection();
  console.log(`name ${connection.name}`);
  for (let key in connection.options) {
    console.log(`key: ${key}, value: ${connection.options[key]}`);
    
  }
  const app = express();
  app.use('/projects', projects);
  console.log(process.env.DOCKER);
  
  process.env.DOCKER == '1'
    ? await app.listen(5000, '0.0.0.0')
    : await app.listen(5000)
})();