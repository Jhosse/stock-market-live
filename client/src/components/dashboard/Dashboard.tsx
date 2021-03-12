import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useQuery } from '@apollo/client'
import { getAllMovers } from '../../graphql/queries'
import { Region, Quotes, Movers, MoversResult } from '../../graphql/graphql'
import { DashboardTable } from './dashboardTable/DashboardTable'
import { isRegexMatch } from '../../utils/strings'

export enum Titles {
  GAINERS = 'Day Gainers',
  LOSERS = 'Day Losers',
  ACTIVES = 'Most Actives'
}

export const Dashboard = () => {
  const initialMap: Map<Titles, Quotes[]> = new Map()
  const [quotes, setQuote] = useState<Map<Titles, Quotes[]>>(initialMap)

  // <GetAllMoversQuery, GetAllMoversQueryVariables>
  const { data, loading } = useQuery(getAllMovers, {
    variables: {
      regions: [Region.Us, Region.Gb, Region.Hk]
    }
  })

  useEffect(() => {
    if (data) {
      data.allMovers.map((region: Movers) => {
        return region.finance.result.map((moverResult: MoversResult) => {
          if (isRegexMatch(Titles.GAINERS, moverResult.title)) {
            if (!initialMap.has(Titles.GAINERS)) initialMap.set(Titles.GAINERS, [])
            initialMap.get(Titles.GAINERS)?.push(...moverResult.quotes)
            setQuote(initialMap)
          }
          else if (isRegexMatch(Titles.LOSERS, moverResult.title)) {
            if (!initialMap.has(Titles.LOSERS)) initialMap.set(Titles.LOSERS, [])
            initialMap.get(Titles.LOSERS)?.push(...moverResult.quotes)
            setQuote(initialMap)
          } else if (isRegexMatch(Titles.ACTIVES, moverResult.title)) {
            if (!initialMap.has(Titles.ACTIVES)) initialMap.set(Titles.ACTIVES, [])
            initialMap.get(Titles.ACTIVES)?.push(...moverResult.quotes)
            setQuote(initialMap)
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

