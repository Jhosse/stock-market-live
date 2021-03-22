import React, { } from 'react'
import { Grid } from 'react-flexbox-grid'
import { PageItemContainer } from '../../components/containers/PageItemContainer'
import { AdminForm } from '../../components/adminForm/AdminForm'



export const Admin = () => {
  return (
    <Grid fluid>
      <PageItemContainer>
        <AdminForm />
      </PageItemContainer>
    </Grid>
  )
}
