import React from 'react'
import { Grid } from 'react-flexbox-grid'
import { AppContainer } from '../containers/AppContainer'
import { Home } from '../../pages/home/Home'

import './_App.scss'

export default function App() {
  return (
    <AppContainer>
      <div className="App">
        <Grid fluid>
          <Home />
        </Grid>
      </div>
    </AppContainer>
  );
}
