import { useQuery } from '@apollo/client'
import React, { FunctionComponent, useState } from 'react'
import { RouteComponentProps, useLocation, useParams } from 'react-router-dom'
import queryString from 'query-string'

export const SymbolPage: FunctionComponent<RouteComponentProps> = () => {
  const { search } = useLocation<{ region: string }>()
  const { region } = queryString.parse(search)
  let { id } = useParams<{ id: string }>()

  return (
    <section>
      <h1>{id}</h1>
      <p>{region}</p>
    </section>
  )
}
