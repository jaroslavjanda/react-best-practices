import React from 'react'

import { toast } from 'react-toastify'
import { minHeight } from 'styled-system'
import { H1 } from '../../components/Typography'

import { Wrapper, Box } from './styled'
import * as routes from '../../routes'
import DelayedLink from '../../components/Link'
import theme from '../../common/theme'

const BestPractices = ({ ...props }) => {
  const { history } = props
  return (
    <div
      style={{ backgroundColor: `${theme.color.black}`, minHeight: '100vh' }}
    >
      <H1 textAlign="center" style={{ color: `${theme.color.white}` }}>
        Features
      </H1>
      <Wrapper>
        <DelayedLink
          isDelayed={1}
          to={routes.REDUX}
          history={history}
          content={<Box>Redux</Box>}
        />

        <Box>Fetching</Box>

        <Box>Components</Box>

        <Box>Libraries</Box>

        <div onClick={() => toast.success('Hello I am success toast')}>
          <Box>Toast success</Box>
        </div>
      </Wrapper>
    </div>
  )
}

export default BestPractices
