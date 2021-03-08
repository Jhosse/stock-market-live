import React, { } from 'react'
import { useQuery } from '@apollo/client'
import { getMovers } from '../../graphql/queries'
import { MoversResult, Region } from '../../graphql/graphql'
import { Row } from 'react-flexbox-grid'
import { DashboardRow } from './dashboardRow/DashboardRow'

import './_Dashboard.scss'

export const Dashboard = () => {
  const { data, loading } = useQuery(getMovers, {
    variables: {
      region: Region.Us
    }
  })

  console.log(data)

  return (
    <Row>
      <div>
        <h1 className={'h1__thin'}>Dashboard</h1>

        {loading
          ? <h1>Introduce loading spinner</h1>
          : data.movers.finance.result.map((r: MoversResult) => <DashboardRow key={r.id} {...r} />)
        }
      </div>
    </Row>
  )
}
