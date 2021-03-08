import { ApolloClient, InMemoryCache } from '@apollo/client'

const httpUri = `${process.env.REACT_APP_SERVER_URL}/graphql`

export const client = new ApolloClient({
  uri: httpUri,
  cache: new InMemoryCache()
})
