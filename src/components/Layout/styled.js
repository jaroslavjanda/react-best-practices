import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import theme from '../../common/theme'

export const Center = styled.div`
  text-align: center;
`

export const Wrapper = styled.div`
  padding-top: 0rem;
  margin-right: auto;
  margin-left: auto;
  max-width: 780px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 64px;
`

export const Header = styled.header`
  display: flex;
  border-bottom: 0.3rem solid ${theme.color.yellow};
  justify-content: space-between;
  background-color: ${theme.color.black};
  padding: 0rem 0rem;
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
  padding: 1.5rem 0rem;

  &:hover {
    transition-duration: 0.3s;
    text-decoration: none;
    color: ${theme.color.yellow};
  }
  &.active {
    color: ${theme.color.yellow};
  }
`

export const Footer = styled.div`
  padding-top: 128px;
`
