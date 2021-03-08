import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import schema from './schema'
import { YahooFinanceAPI } from './dataSources/YahooFinanceAPI'

const PORT = 4000

const app = express()
const server = new ApolloServer({
  schema,
  dataSources: () => ({
    yahooFinanceAPI: new YahooFinanceAPI(),
  }),
  validationRules: [depthLimit(7)],
  playground: true,
})

app.use(cors({ credentials: true, allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use(compression())

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app)

httpServer.listen({ port: PORT }, (): void =>
  console.log(`\n🚀 GraphQL is now running on http://localhost:${PORT}/graphql`)
)
