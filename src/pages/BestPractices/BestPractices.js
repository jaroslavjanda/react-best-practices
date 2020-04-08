import React from 'react'

import { toast } from 'react-toastify'
import { minHeight } from 'styled-system'
import { H1 } from '../../components/Typography'

import { Wrapper, Box } from './styled'
import * as routes from '../../routes'
import Link from '../../components/Link'
import theme from "../../common/theme"

const BestPractices = () => {
  return (
    <div
      style={{ backgroundColor: `${theme.color.black}`, minHeight: '100vh' }}
    >
      <H1 textAlign="center" style={{ color: `${theme.color.white}` }}>
        Features
      </H1>
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
    </div>
  )
}

export default BestPractices
