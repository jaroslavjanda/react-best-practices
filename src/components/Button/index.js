import styled from 'styled-components'
import React from 'react'
import theme from '../../common/theme'

export const Button = styled.a`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.blue};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin: 3.5rem 0rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white} !important;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.3s;
  }
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

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 4em 0;
`
