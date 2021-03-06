// import 'graphql-import-node'
// import * as typeDefs from './typeDefs.graphql'
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'
import { GraphQLSchema } from 'graphql'

const typeDefs = importSchema('./schema/typeDefs.graphql');

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
