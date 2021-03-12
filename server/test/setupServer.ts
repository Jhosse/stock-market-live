import { ApolloServer } from 'apollo-server-express'
import { createTestClient } from 'apollo-server-testing'
import schema from '../schema'
import { YahooFinanceAPI } from '../dataSources/YahooFinanceAPI'
import { mockSummaryAndSparkUS, mockMoversUS, mockMoversGB, mockMoversHK } from '../mockData/yahooFinance/index'

const yahooFinanceAPI = new YahooFinanceAPI()

const server = new ApolloServer({
  schema,
  dataSources: () => ({ yahooFinanceAPI })
})

yahooFinanceAPI.getSummaryAndSpark = jest.fn(() => Promise.resolve(mockSummaryAndSparkUS))
yahooFinanceAPI.getMovers = jest.fn(() => Promise.resolve(mockMoversUS))
yahooFinanceAPI.getAllMovers = jest.fn(() => Promise.resolve([mockMoversUS, mockMoversGB, mockMoversHK]))

export const { query, mutate } = createTestClient(server)
