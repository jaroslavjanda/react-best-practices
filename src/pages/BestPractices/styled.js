import styled from 'styled-components'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 64px;
`

export const Box = styled.div`
  letter-spacing: 2px;
  text-shadow: rgba(27, 27, 27, 0) 0px 10px 20px;
  font-family: Oswald, sans-serif;
  font-size: 3.2rem;
  font-size: 22px;
  margin: 16px;
  border-radius: 24px;
  text-align: center;
  min-width: 240px;
  background: ${theme.color.black};
  border: 3px solid ${theme.color.blue};
  color: ${theme.color.white};
  font-weight: bold;
  padding-top: 74px;
  padding-bottom: 80px;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${theme.color.blue};
    color: ${theme.color.black};
    transform: scale(1.1, 1.1);
    opacity: 1;
    transition: 0.3s;
  }
  &:active {
    background: ${theme.color.blue};
    color: ${theme.color.black};
    transform: scale(1.1, 1.1);
    opacity: 1;
    transition: 0.3s;
  }
`
