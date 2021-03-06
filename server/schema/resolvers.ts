import { IResolvers } from 'graphql-tools'
import { SummaryAndSpark } from '../types/graphql'
import summaryAndSparkGB from '../mockData/yahooFinance/marketSummaryAndSparkGB'

const resolvers: IResolvers = {
  Query: {
    summaryAndSpark: async (_source, { region }, { dataSources }): Promise<SummaryAndSpark> => {
      return summaryAndSparkGB
      // return await dataSources.yahooFinanceAPI.getSummaryAndSpark(region);
    }
  }
}

export default resolvers
