import { Link as OriginalLink } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'
import theme from '../../common/theme'

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
  return (
    <a
      onClick={() =>
        isDelayed
          ? setTimeout(() => {
              history.push(to)
            }, 500)
          : history.push(to)
      }
    >
      {content}
    </a>
  )
}
export default DelayedLink
