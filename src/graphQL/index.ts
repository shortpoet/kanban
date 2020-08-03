import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ProjectsResolver } from "./project.resolvers";
import * as express from 'express';
import * as graphHTTP from 'express-graphql'; // middleware
const { graphqlHTTP } = require('express-graphql');

// define top level async function that allows to use async at top level
(async () => {
  const connection = await createConnection();

  console.log(`name ${connection.name}`);
  console.log(`options ${connection.options}`);
  

  const schema = await buildSchema({
    resolvers: [ProjectsResolver]
  })

  const app = express()
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }))
  app.listen(4000);
})();