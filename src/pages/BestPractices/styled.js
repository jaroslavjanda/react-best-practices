import styled from 'styled-components'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 64px;
`

export const Box = styled.div`
  line-height: 120%;
  text-shadow: rgba(27, 27, 27, 0) 0px 10px 20px;
  font-size: 22px;
  margin: 16px;
  border-radius: 24px;
  text-align: center;
  min-width: 240px;
  height: 240px;
  border: 2px solid ${theme.color.oceanBlue};
  background: ${theme.color.blue};
  color: ${theme.color.black};
  font-weight: bold;
  text-align: left;
  padding: 26px 32px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.color.blue};
    background: ${theme.color.pink};
    color: black;
    transform: scale(1.1, 1.1);
    opacity: 1;
    transition: 0.3s;
  }
`
