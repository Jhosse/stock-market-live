import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { AppContainer } from '../containers/AppContainer'
import { Home } from '../../pages/home/Home'
import { Admin } from '../../pages/admin/Admin'
import { SymbolPage } from '../../pages/symbolPage/SymbolPage'

import './_App.scss'

export default function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/symbol/:id' component={SymbolPage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}
