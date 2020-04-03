import React from 'react'
import { H1 } from '../../../components/Typography'
import Link from '../../../components/Link'
import * as routes from '../../../routes'
import { Wrapper, Library } from './styled'

const Libraries = () => {
  return (
    <>
      <Link to={routes.BEST_PRACTICES}>Go back</Link>
      <H1>Libraries</H1>
      <Wrapper>
        <Library>react-router-dom</Library>
        <Library>styled-components</Library>
        <Library>react-toastify</Library>
      </Wrapper>
    </>
  )
}

export default Libraries
