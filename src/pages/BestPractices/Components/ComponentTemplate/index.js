import React from 'react'
import Layout from '../../../../components/Layout'
import { H1 } from '../../../../components/Typography'
import * as routes from '../../../../routes'
import Link from '../../../../components/Link'

const ComponentDetail = ({ match }) => {
  return (
    <>
      <Link to={routes.COMPONENTS}>Go Back</Link>
      <H1>Detail of component {match.params.componentId}</H1>
    </>
  )
}
export default ComponentDetail
