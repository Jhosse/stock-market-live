import { ApolloServer } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import schema from '../schema'
import { YahooFinanceAPI } from '../dataSources/YahooFinanceAPI'
import summaryAndSparkGB from '../mockData/yahooFinance/marketSummaryAndSparkGB'

const yahooFinanceAPI = new YahooFinanceAPI()

const server = new ApolloServer({
  schema,
  dataSources: () => ({ yahooFinanceAPI })
})

yahooFinanceAPI.getSummaryAndSpark = jest.fn(() => Promise.resolve(summaryAndSparkGB))

export const { query, mutate } = createTestClient(server)
