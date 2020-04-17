import { Link as OriginalLink } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'
import React from 'react'
const StyledLink = styled(OriginalLink)`
  text-decoration: none;
  color: ${theme.color.black};
  transition-duration: 0.3s;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: ${theme.color.yellow};
    transition-duration: 0.3s;
  }
`

const DelayedLink = ({ isDelayed, to, history, content }) => {
  console.log(history)
  return (
    <StyledLink
      onClick={() =>
        isDelayed
          ? setTimeout(() => {
              history.push(to)
            }, 500)
          : history.push(to)
      }
    >
      {content}
    </StyledLink>
  )
}
export default DelayedLink
