import { IResolvers } from 'graphql-tools'
import { SummaryAndSpark, Movers } from '../types/graphql'
import { Region } from '../types/customTypes'
import { mockSummaryAndSparkUS, mockMoversUS, mockSummaryAndSparkGB, mockMoversGB, mockSummaryAndSparkHK, mockMoversHK } from '../mockData/yahooFinance/index'

enum mockDataType {
  MOVER,
  SUMMARY
}

const findMockDataByRegion = (region: Region, type: mockDataType): SummaryAndSpark | Movers => {
  switch (region) {
    case Region.US:
      if (type === mockDataType.MOVER) return mockMoversUS
      return mockSummaryAndSparkUS
    case Region.GB:
      if (type === mockDataType.MOVER) return mockMoversGB
      return mockSummaryAndSparkGB
    default:
      if (type === mockDataType.MOVER) return mockMoversHK
      return mockSummaryAndSparkHK
  }
}

const resolvers: IResolvers = {
  Query: {
    // TODO: Handle Errors with ApolloError > apollo-server-express
    summaryAndSpark: async (_source, { region }, { dataSources }): Promise<SummaryAndSpark> => {
      return findMockDataByRegion(region, mockDataType.SUMMARY) as SummaryAndSpark
      // return await dataSources.yahooFinanceAPI.getSummaryAndSpark(region);
    },
    movers: async (_source, { region }, { dataSources }): Promise<Movers> => {
      return findMockDataByRegion(region, mockDataType.MOVER) as Movers
      // return await dataSources.yahooFinanceAPI.getMovers(region);
    }
  }
}

export default resolvers
