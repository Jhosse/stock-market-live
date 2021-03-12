import React, { } from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid'
import { Header } from '../../components/header/header'
import { Dashboard } from '../../components/dashboard/Dashboard'
import { PageItemContainer } from '../../components/containers/PageItemContainer'
import { Clock, CITIES_NAMES } from '../../components/clock/Clock'

export const Home = () => {
  return (
    <Grid fluid>
      <PageItemContainer>
        <Header />
      </PageItemContainer>
      <main>
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
      </main>
    </Grid>
  )
}
