import React, { } from 'react'
import { Row, Col } from 'react-flexbox-grid'

import './_header.scss'

export const Header = () => {
  return (
    <Row>
      <Col xs={12}>
        <Row center="xs">
          <header>
            <h1 className={'h1__title'}>Stock market live</h1>
          </header>
        </Row>
      </Col>
    </Row>
  )
}
