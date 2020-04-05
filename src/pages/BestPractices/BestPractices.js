import React from 'react'

import { toast } from 'react-toastify'
import { H1 } from '../../components/Typography'

import { Wrapper, Box } from './styled'
import * as routes from '../../routes'
import Link from '../../components/Link'

const BestPractices = () => {
  return (
    <>
      <H1 textAlign="center">Best Practises</H1>
      <Wrapper>
        <Link to={routes.REDUX}>
          <Box>Redux</Box>
        </Link>
        <Box>Fetching</Box>
        <Link to={routes.COMPONENTS}>
          <Box>Components</Box>
        </Link>
        <Link to={routes.LIBRARIES}>
          <Box>Libraries</Box>
        </Link>
        <div onClick={() => toast.success('Hello I am success toast')}>
          <Box>Toast success</Box>
        </div>
      </Wrapper>
    </>
  )
}

export default BestPractices
