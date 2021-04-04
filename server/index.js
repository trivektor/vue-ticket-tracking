import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import {readFileSync} from 'fs';
import mongoose from 'mongoose'

import resolvers from './resolvers';

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true});

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