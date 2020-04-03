import React from 'react'
import Layout from '../../../components/Layout'
import { H1 } from '../../../components/Typography'
import * as routes from '../../../routes'
import Link from '../../../components/Link'

const Components = () => {
  return (
    <>
      <Link to={routes.BEST_PRACTICES}>Go Back</Link>
      <H1>List of components</H1>
      <Link to={routes.getComponentDetailRoute(1)}>
        <div>Component #1</div>
      </Link>
      <div>Component #2</div>
      <div>Component #3</div>
      <div>Component #4</div>
      <div>Component #5</div>
    </>
  )
}
export default Components
