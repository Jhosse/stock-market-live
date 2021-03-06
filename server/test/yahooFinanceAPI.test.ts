import { gql } from 'apollo-server-express';
import { query } from './setupServer'

describe('Yahoo Finance API', () => {
  it('summaryAndSpark', async () => {

    const res = await query({
      query: gql`
        query {
          summaryAndSpark {
            marketSummaryAndSparkResponse {
              result {
                symbol
              }
            }
          }
        }
      `
    })

    expect(res.data).toBeDefined()
    expect(res.errors).toBeUndefined()
    expect(res.data).toMatchSnapshot()
  })
})

