import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { AppContainer } from '../containers/appContainer/AppContainer'
import { Clock, CITIES_NAMES } from '../clock/Clock'

import './_App.scss'

function App() {
  return (
    <AppContainer>
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={4}>
              <Clock width={10} height={10} cityName={CITIES_NAMES.LONDON} />
            </Col>
            <Col xs={4}>
              <Clock width={10} height={10} cityName={CITIES_NAMES.NEW_YORK} />
            </Col>
            <Col xs={4}>
              <Clock width={10} height={10} cityName={CITIES_NAMES.TOKYO} />
            </Col>
          </Row>
        </Grid>
      </div>
    </AppContainer>
  );
}

export default App;
