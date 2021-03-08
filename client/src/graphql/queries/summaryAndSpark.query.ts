import { gql } from '@apollo/client'

export const getSummaryAndSpark = gql`
  query GetSummaryAndSpark($region: Region!) {
    summaryAndSpark(region: $region) {
      marketSummaryAndSparkResponse {
        result {
          symbol
        }
      }
    }
  }
`
