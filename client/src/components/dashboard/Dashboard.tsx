import React, { useState, useEffect } from 'react'
import { Row } from 'react-flexbox-grid'

import './_Dashboard.scss'

export const Dashboard = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    // fetch
  }, [])

  return (
    <Row>
      <h1 className={'h1__thin'}>Dashboard</h1>
    </Row>
  )
}
