import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { yahooFinanceToken } from '../env'
import { SummaryAndSpark } from '../types/graphql'

const URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary"

export class YahooFinanceAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = URL
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('x-rapidapi-key', yahooFinanceToken)
    request.headers.set('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
    request.headers.set('useQueryString', 'true')
  }

  async getSummaryAndSpark(region: String = 'US'): Promise<SummaryAndSpark> {
    return this.get(`?region=${region}`)
  }
}

