import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { yahooFinanceToken } from '../env'
import { SummaryAndSpark, Movers, Region } from '../types/graphql'

const URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2'
const HOST = 'apidojo-yahoo-finance-v1.p.rapidapi.com'

export class YahooFinanceAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = URL
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('x-rapidapi-key', yahooFinanceToken)
    request.headers.set('x-rapidapi-host', HOST)
    request.headers.set('useQueryString', 'true')
  }

  /**
   * Get live summary information of market by region
   * @param region
   * @returns Promise<SummaryAndSpark>
   */
  async getSummaryAndSpark(region: Region): Promise<SummaryAndSpark> {
    return this.get(`get-summary?region=${region}`)
  }

  /**
   * The live day gainers / losers / actives in specific region
   * @param region (US | GB | HK)
   * @returns Promise<Movers>
   */
  async getMovers(region: Region): Promise<Movers> {
    return this.get(`get-movers?region=${region}`)
  }

  /**
 * The live day gainers / losers / actives in an array of regions
 * @param regions [US,GB,HK]
 * @returns Promise<Movers[]>
 */
  async getAllMovers(regions: Region[]): Promise<Movers[]> {
    return await Promise.all(
      regions.map(region => {
        return this.get(`get-movers?region=${region}`)
      })
    )
  }
}

