import React from 'react'
import { AppContainer } from '../containers/AppContainer'
import { Home } from '../../pages/home/Home'

import './_App.scss'

export default function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}
