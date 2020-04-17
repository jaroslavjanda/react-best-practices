import styled from 'styled-components'
import React from 'react'
import theme from '../../common/theme'

export const Button = styled.button`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.yellow};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white} !important;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 7px 15px 0px rgba(252, 191, 23, 0.3);
    transform: translateY(-4px);
  }
`

export const ButtonDiv = styled.button`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.yellow};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white} !important;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 7px 15px 0px rgba(252, 191, 23, 0.3);
    transform: translateY(-4px);
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 2em 0;
`
