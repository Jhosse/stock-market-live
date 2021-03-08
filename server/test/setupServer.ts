import { ApolloServer } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import schema from '../schema'
import { YahooFinanceAPI } from '../dataSources/YahooFinanceAPI'
import { mockSummaryAndSparkUS, mockMoversUS } from '../mockData/yahooFinance/index'

const yahooFinanceAPI = new YahooFinanceAPI()

const server = new ApolloServer({
  schema,
  dataSources: () => ({ yahooFinanceAPI })
})

yahooFinanceAPI.getSummaryAndSpark = jest.fn(() => Promise.resolve(mockSummaryAndSparkUS))
yahooFinanceAPI.getMovers = jest.fn(() => Promise.resolve(mockMoversUS))

export const { query, mutate } = createTestClient(server)
