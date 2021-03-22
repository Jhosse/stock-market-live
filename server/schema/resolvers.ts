import { IResolvers } from 'graphql-tools'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { isDev, privateKey } from '../env'
import { SummaryAndSpark, Movers, AuthPayload } from '../types/graphql'
import { Region } from '../types/customTypes'
import {
  mockSummaryAndSparkUS,
  mockMoversUS,
  mockSummaryAndSparkGB,
  mockMoversGB,
  mockSummaryAndSparkHK,
  mockMoversHK,
  mockDBUser
} from '../mockData/index'

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
      if (isDev) {
        return findMockDataByRegion(region, mockDataType.SUMMARY) as SummaryAndSpark
      }
      return await dataSources.yahooFinanceAPI.getSummaryAndSpark(region)
    },
    movers: async (_source, { region }, { dataSources }): Promise<Movers> => {
      if (isDev) {
        return findMockDataByRegion(region, mockDataType.MOVER) as Movers
      }
      return await dataSources.yahooFinanceAPI.getMovers(region)
    },
    allMovers: async (_source, { regions }, { dataSources }): Promise<Movers[]> => {
      if (isDev) {
        return [mockMoversUS, mockMoversGB, mockMoversHK]
      }
      return await dataSources.yahooFinanceAPI.getAllMovers(regions)
    }
  },

  Mutation: {
    login: async (_source, { email, password }): Promise<AuthPayload> => {
      // TODO: Refactor when DB is implemented
      const emptyUser = {
        token: '',
        user: {
          id: '',
          username: '',
          email: ''
        }
      }

      // TODO: Handle this properly
      if (email !== mockDBUser.email) return emptyUser // throw Error('User doesn\'t exist')

      const validPassword = await bcrypt.compare(password, mockDBUser.password)
      // TODO: Handle this properly
      if (!validPassword) return emptyUser // throw Error('Password doesn\'t match')
      const token = await jwt.sign({ id: mockDBUser.id, username: mockDBUser.username, email }, privateKey, { algorithm: 'RS256' })
      return { token: `Bearer ${token}`, user: mockDBUser }
    }
  }
}

export default resolvers
