import { ApolloClient, ApolloLink, InMemoryCache, concat, createHttpLink } from '@apollo/client';
import { getItemInLocalStorage } from './utils'

const link = createHttpLink({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`,
  credentials: 'same-origin'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getItemInLocalStorage()
  operation.setContext({
    headers: {
      authorization: token ? token : ''
    }
  });
  return forward(operation);
})

// TODO: Handle an error link
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, link)
})
