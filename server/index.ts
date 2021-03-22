import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import { app } from './app'
import { port, host } from './env'
import schema from './schema'
import { YahooFinanceAPI } from './dataSources/YahooFinanceAPI'
import { authenticateUser } from './service/auth'
import { AuthenticatedUser } from './types/customTypes'

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    yahooFinanceAPI: new YahooFinanceAPI(),
  }),
  validationRules: [depthLimit(7)],
  playground: true,
  context: async ({ req }) => {
    let user: AuthenticatedUser | undefined
    const token = req.headers.authorization || ''

    try {
      user = await authenticateUser(token)
    } catch (e) {
      // TODO: Handle this properly
      console.log(`Token auth failed --> ${e}`)
    }

    return {
      user
    }
  }
})

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app)

httpServer.listen({ port }, (): void =>
  console.log(`\n🚀 GraphQL is now running on ${host}:${port}/graphql`)
)
