import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'

export default styled(Link)`
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
