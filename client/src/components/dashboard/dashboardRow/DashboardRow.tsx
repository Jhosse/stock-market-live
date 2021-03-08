import React, { FunctionComponent } from 'react'
import { MoversResult } from '../../../graphql/graphql'

export const DashboardRow: FunctionComponent<MoversResult> = ({
  title,
  description,
  quotes
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
