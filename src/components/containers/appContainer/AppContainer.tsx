import React, { FunctionComponent, ReactNode } from 'react'

import './_AppContainer.scss'

interface AppContainerChildren {
  children: ReactNode
}

export const AppContainer: FunctionComponent<AppContainerChildren> = ({
  children
}) => {
  return (
    <div className={'AppContainer'}>
      {children}
    </div>
  )
}
