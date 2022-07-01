import { ApolloClient, from, HttpLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import possibleTypes from './possibleTypes.json';
// import { WebSocketLink } from 'apollo-link-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  includeExtensions: true,
  credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  return forward(operation);
});

// setup your client

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3000/graphql',
  options: {
    lazy: true,
    timeout: 10000,
    reconnect: true,
  },
});

export const restartWebsockets = () => {
  //
};

export const closeWebsockets = () => {
  // wsClient.close(true);
};

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: from([errorLink, link]),
  cache: new InMemoryCache({ possibleTypes: possibleTypes.possibleTypes }),
  name: 'web-client',
  version: '1.0',
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
  connectToDevTools: process.env.NODE_ENV !== 'production',
});
