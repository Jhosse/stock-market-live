import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useQuery } from '@apollo/client'
import { getAllMovers } from '../../graphql/queries'
import { Region, Quotes, Movers, MoversResult } from '../../graphql/graphql'
import { DashboardTable } from './dashboardTable/DashboardTable'
import { isRegexMatch, updateMapKeyArrayPair } from '../../utils'

export enum Titles {
  GAINERS = 'Day Gainers',
  LOSERS = 'Day Losers',
  ACTIVES = 'Most Actives'
}

export const Dashboard = () => {
  const quotesMap: Map<Titles, Quotes[]> = new Map()
  const [quotes, setQuote] = useState<Map<Titles, Quotes[]>>(new Map())

  // <GetAllMoversQuery, GetAllMoversQueryVariables>
  const { loading, data } = useQuery(getAllMovers, {
    variables: {
      regions: [Region.Us, Region.Gb, Region.Hk]
    }
  })

  useEffect(() => {
    if (data) {
      data.allMovers.map((region: Movers) => {
        return region.finance.result.map((moverResult: MoversResult) => {
          switch (true) {
            case isRegexMatch(Titles.GAINERS, moverResult.title):
              return setQuote(updateMapKeyArrayPair(Titles.GAINERS, moverResult.quotes, quotesMap))
            case isRegexMatch(Titles.LOSERS, moverResult.title):
              return setQuote(updateMapKeyArrayPair(Titles.LOSERS, moverResult.quotes, quotesMap))
            case isRegexMatch(Titles.ACTIVES, moverResult.title):
              return setQuote(updateMapKeyArrayPair(Titles.ACTIVES, moverResult.quotes, quotesMap))
            default:
              return undefined
          }
        })
      })
    }
  }, [data])

  if (loading
    || !quotes.has(Titles.GAINERS)
    || !quotes.has(Titles.LOSERS)
    || !quotes.has(Titles.ACTIVES)) {
    return <h1>LOADING...</h1>
  }

  return (
    <div>
      {populateRow(quotes)}
    </div>
  )
}

const populateRow = (quotes: Map<Titles, Quotes[]>) => {
  return Array.from(quotes, ([key, value]) => {
    return <DashboardTable key={uuidv4()} title={key} quotes={value} />
  })
}

