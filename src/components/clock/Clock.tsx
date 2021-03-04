import React, { FunctionComponent } from 'react'
import moment from 'moment-timezone'

import './_Clock.scss'

export enum CITIES_NAMES {
  NEW_YORK = 'New York',
  LONDON = 'London',
  TOKYO = 'Tokyo'
}

interface ClockProps {
  width: number
  height: number
  cityName: CITIES_NAMES
}

const CITY_TIMEZONE_MAP = new Map([
  [CITIES_NAMES.NEW_YORK, 'America/New_York'],
  [CITIES_NAMES.LONDON, 'GMT+0'],
  [CITIES_NAMES.TOKYO, 'Asia/Tokyo']
]);

export const Clock: FunctionComponent<ClockProps> = ({
  width,
  height,
  cityName
}) => {

  const wrapperStyles = {
    width: `${width}em`,
    height: `${height}em`
  }

  const hours = Number(moment().tz(`${CITY_TIMEZONE_MAP.get(cityName)}`).format('h'))
  const minutes = Number(moment().tz(`${CITY_TIMEZONE_MAP.get(cityName)}`).format('mm'))

  const handsPositionStyles = {
    hours: {
      transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`
    },
    minutes: {
      transform: `rotateZ(${(minutes * 6)}deg)`
    }
  }

  return (
    <div style={wrapperStyles} className={'clock'}>
      <div className={'clock__body'}>
        <div className={'clock__hands-container clock__hands-container--hours'}>
          <div style={handsPositionStyles.hours} className={'clock__hands clock__hands--hours'}></div>
        </div>
        <div className={'clock__hands-container clock__hands-container--minutes'}>
          <div style={handsPositionStyles.minutes} className={'clock__hands clock__hands--minutes'}></div>
        </div>
      </div>
      <div className={'clock__title'}>
        <h3>{cityName}</h3>
      </div>
    </div>
  )
}
