import styled from 'styled-components'
import theme from '../../common/theme'

export const Button = styled.a`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.blue};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white} !important;
`

export const ButtonDiv = styled.button`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.blue};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
`
