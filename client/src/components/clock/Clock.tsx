import React, { FunctionComponent } from 'react'
import moment from 'moment-timezone'

import './_Clock.scss'

export enum CITIES_NAMES {
  NEW_YORK = 'New York',
  LONDON = 'London',
  HONG_KONG = 'Hong Kong'
}

interface ClockProps {
  width: number
  height: number
  cityName: CITIES_NAMES
}

const CITY_TIMEZONE_MAP = new Map([
  [CITIES_NAMES.NEW_YORK, { timeZone: 'America/New_York', marketOpen: '9' }],
  [CITIES_NAMES.LONDON, { timeZone: 'GMT+0', marketOpen: '9' }],
  [CITIES_NAMES.HONG_KONG, { timeZone: 'Asia/Hong_Kong', marketOpen: '9' }]
]);

/**
 * TODO:
 * Build a countdown clock underneath the city name.
 * or "open" in green.
 * london: M-F, 8:00am - 4:30pm (GMT)
 * New York: M-F, 9:30am - 4:00pm (EST)
 * Hong Kong: M-F, 9:30am - 12:00pm, 1:00pm - 4:00pm (HKT)
 * https://www.tradinghours.com/markets
 */

export const Clock: FunctionComponent<ClockProps> = ({
  width,
  height,
  cityName
}) => {

  const wrapperStyles = {
    width: `${width}em`,
    height: `${height}em`
  }

  const hours = Number(moment().tz(`${CITY_TIMEZONE_MAP.get(cityName)?.timeZone}`).format('h'))
  const minutes = Number(moment().tz(`${CITY_TIMEZONE_MAP.get(cityName)?.timeZone}`).format('mm'))

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
      <div className={'clock__title'}>
        <h3 className={'h3__thin'}>{cityName}</h3>
      </div>
      <div className={'clock__body'}>
        <div className={'clock__hands-container clock__hands-container--hours'}>
          <div style={handsPositionStyles.hours} className={'clock__hands clock__hands--hours'}></div>
        </div>
        <div className={'clock__hands-container clock__hands-container--minutes'}>
          <div style={handsPositionStyles.minutes} className={'clock__hands clock__hands--minutes'}></div>
        </div>
      </div>
    </div>
  )
}
