import React, { FunctionComponent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Row, Col } from 'react-flexbox-grid'
import { Quotes } from '../../../graphql/graphql'
import { removeSubString } from '../../../utils'
import { Titles } from '../Dashboard'

import './_DashboardTable.scss'

const GAINERS_DESCRIPTION = "Stocks price percent change greater than ~3% with respect to the previous close"
const LOSER_DESCRIPTION = "Stocks price percent change with respect to the previous close"
const ACTIVE_DESCRIPTION = "Stocks intraday trade volume"

const MARKET_SUBSTRING = '_market'

interface DashboardTableProps {
  title: Titles
  quotes: Quotes[]
}

export const DashboardTable: FunctionComponent<DashboardTableProps> = ({
  title,
  quotes
}) => {
  const [, ...tableHeaders]: string[] = Object.keys(quotes[0])

  return (
    <Row>
      <Col xs={12}>
        <div className={'dashboardTable'}>
          <h1 className={'dashboardTable__title'}>{title}</h1>
          <p className={'dashboardTable__description'}>{selectTitle(title)}</p>
          <table className={'dashboardTable__table'}>
            <thead>
              <tr>
                {tableHeaders.map((header: string) =>
                  <th className={'dashboardTable__cell--header'} key={uuidv4()}>
                    {header}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {populateTableBody(quotes, tableHeaders)}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  )
}

const populateTableBody = (quotes: Quotes[], tableHeaders: string[]): ReactNode => {
  // any to fix access object with key
  return quotes.map((quote: any) => {
    return (
      <tr key={uuidv4()}>
        {tableHeaders.map((header: any, index: number) => {
          if (index === 0) {
            return (
              <td
                className={'dashboardTable__cell--content dashboardTable__cell--symbol'}
                key={uuidv4()}
                data-attribute={header}>
                <Link to={`/symbol/${quote[header]}?region=us`} >
                  {quote[header].toString().toLowerCase()}
                </Link>
              </td>
            )
          } else {
            return (
              <td
                className={'dashboardTable__cell--content'}
                key={uuidv4()}
                data-attribute={header}>
                {quote[header].toString().toLowerCase()}
              </td>
            )
          }
        }
        )}
      </tr>
    )
  })
}

const selectTitle = (title: Titles): string => {
  switch (title) {
    case Titles.GAINERS:
      return GAINERS_DESCRIPTION
    case Titles.LOSERS:
      return LOSER_DESCRIPTION
    case Titles.ACTIVES:
      return ACTIVE_DESCRIPTION
  }
}
