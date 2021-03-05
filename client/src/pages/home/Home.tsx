import React, { } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Dashboard } from '../../components/dashboard/Dashboard'
import { PageItemContainer } from '../../components/containers/PageItemContainer'
import { Clock, CITIES_NAMES } from '../../components/clock/Clock'

export const Home = () => {
  return (
    <div>
      <PageItemContainer>
        <Row>
          <Col xs={4}>
            <Clock width={10} height={10} cityName={CITIES_NAMES.LONDON} />
          </Col>
          <Col xs={4}>
            <Clock width={10} height={10} cityName={CITIES_NAMES.NEW_YORK} />
          </Col>
          <Col xs={4}>
            <Clock width={10} height={10} cityName={CITIES_NAMES.HONG_KONG} />
          </Col>
        </Row>
      </PageItemContainer>

      <PageItemContainer>
        <Dashboard />
      </PageItemContainer>
    </div>
  )
}
