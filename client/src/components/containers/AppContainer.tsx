import React, { FunctionComponent, ReactNode } from 'react'

interface AppContainerChildren {
  children: ReactNode
}

const containerStyles = {
  padding: '1em 0'
}

export const AppContainer: FunctionComponent<AppContainerChildren> = ({
  children
}) => {
  return (
    <div style={containerStyles}>
      {children}
    </div>
  )
}
