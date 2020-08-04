import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ProjectsResolver } from "./project.resolvers";
import * as express from 'express';
import * as graphHTTP from 'express-graphql'; // middleware
import { generateSchema } from "./generateSchema";
const { graphqlHTTP } = require('express-graphql');

// define top level async function that allows to use async at top level
(async () => {
  const connection = await createConnection();
  const schema = await generateSchema(ProjectsResolver);
  // console.log(`name ${connection.name}`);
  // console.log(`options ${connection.options}`);
  const app = express()
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))
  app.listen(4000);
})();