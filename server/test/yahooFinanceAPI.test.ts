import { gql } from 'apollo-server-express';
import { query } from './setupServer'

describe('Yahoo Finance API', () => {
  it('should fetch summaryAndSpark', async () => {
    const res = await query({
      query: gql`
        query GetSummaryAndSpark($region: String) {
          summaryAndSpark(region: $region) {
            marketSummaryAndSparkResponse {
              result {
                fullExchangeName
                symbol
                market
              }
            }
          }
        }
      `,
      variables: {
        region: 'GB'
      }
    })

    expect(res.data).toBeDefined()
    expect(res.errors).toBeUndefined()
    expect(res.data).toMatchSnapshot()
  })

  it('should fetch movers', async () => {
    const res = await query({
      query: gql`
        query GetMovers($region: String) {
          movers(region: $region) {
            finance {
              result {
                id
                title
                description
                quotes {
                  symbol
                  market
                  marketState
                }
              }
            }
          }
        }
      `,
      variables: {
        region: 'GB'
      }
    })

    expect(res.data).toBeDefined()
    expect(res.errors).toBeUndefined()
    expect(res.data).toMatchSnapshot()
  })
})

