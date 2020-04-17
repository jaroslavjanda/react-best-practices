import React from 'react'

import { toast } from 'react-toastify'
import { minHeight } from 'styled-system'
import { H1 } from '../../components/Typography'

import { Wrapper, Box } from './styled'
import * as routes from '../../routes'
import DelayedLink from '../../components/Link'
import theme from '../../common/theme'

const BestPractices = ({ ...props }) => {
  return (
    <div
      style={{ backgroundColor: `${theme.color.black}`, minHeight: '100vh' }}
    >
      <H1 textAlign="center" style={{ color: `${theme.color.white}` }}>
        Features
      </H1>
      <Wrapper>
        {console.log(props)}
        <DelayedLink
          isDelayed={true}
          to={routes.REDUX}
          history={props.history}
          content={<Box>Redux</Box>}
        />

        <Box>Fetching</Box>
        <DelayedLink to={routes.COMPONENTS}>
          <Box>Components</Box>
        </DelayedLink>
        <DelayedLink to={routes.LIBRARIES}>
          <Box>Libraries</Box>
        </DelayedLink>
        <div onClick={() => toast.success('Hello I am success toast')}>
          <Box>Toast success</Box>
        </div>
      </Wrapper>
    </div>
  )
}

export default BestPractices
