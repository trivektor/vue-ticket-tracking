import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import {readFileSync} from 'fs';

import resolvers from './resolvers';

const app = express();
const typeDefs = readFileSync('./schema/schema.graphql').toString('utf-8');

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});