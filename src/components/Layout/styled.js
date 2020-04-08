import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  padding: 0rem;
  margin: 0 0rem;
  text-align: center;
`

export const Header = styled.header`
  display: flex;
  border-bottom: 0.3rem solid ${theme.color.blue};
  justify-content: space-between;
  background-color: ${theme.color.black};
  padding: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
`

export const HeaderSection = styled.div`
  color: ${theme.color.black};
  display: flex;
  flex-wrap: wrap;
`

export const HeaderLink = styled(NavLink)`
  margin: 0 2rem;
  font-weight: normal;
  cursor: pointer;
  color: ${theme.color.white};
  text-decoration: none;
  transition-duration: 0.3s;

  &:hover {
    transition-duration: 0.3s;
    text-decoration: none;
    color: ${theme.color.blue};
  }
  &.active {
    color: ${theme.color.blue};
  }
`
