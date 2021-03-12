import React, { FunctionComponent, ReactNode } from 'react'

interface PageItemContainerChildren {
  children: ReactNode
}

const containerStyles = {
  padding: '.5em 0'
}

export const PageItemContainer: FunctionComponent<PageItemContainerChildren> = ({
  children
}) => {
  return (
    <article style={containerStyles}>
      {children}
    </article>
  )
}
