import React, { FunctionComponent, ReactNode } from 'react'

interface AppContainerChildren {
  children: ReactNode
}

const containerStyles = {
  with: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1em 0'
}

export const AppContainer: FunctionComponent<AppContainerChildren> = ({
  children
}) => {
  return (
    <div className="App" style={containerStyles}>
      {children}
    </div>
  )
}
