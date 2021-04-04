import {HttpLink} from 'apollo-link-http';
import {ApolloClient, InMemoryCache} from '@apollo/client';

const getHeaders = () => {
  const headers = {};
  const jwtToken = localStorage.getItem('jwtToken');

  if (jwtToken) {
    headers.Authorization = `Bearer ${jwtToken}`;
  }

  return headers;
};

const Link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  headers: getHeaders(),
});

// https://github.com/learnwithjason/vue-3-and-apollo-client-3/blob/main/src/main.js
const apolloClient = new ApolloClient({
  link: Link,
  cache: new InMemoryCache(),
});

export default apolloClient;
