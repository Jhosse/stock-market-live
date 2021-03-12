import { gql } from '@apollo/client'

export const getAllMovers = gql`
  query GetAllMovers($regions: [Region]!) {
    allMovers(regions: $regions) {
      finance {
        result {
          id
          title
          description
          quotes {
            symbol
            market
            marketState
            tradeable
            exchange
            quoteType
          }
        }
      }
    }
  }
`
