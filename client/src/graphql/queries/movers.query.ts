import { gql } from '@apollo/client'

export const getMovers = gql`
  query GetMovers($region: Region!) {
    movers(region:$region) {
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
`
