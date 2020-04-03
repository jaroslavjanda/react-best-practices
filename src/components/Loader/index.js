import styled, { keyframes } from 'styled-components'
import React from 'react'
import { Center } from '../Alignment'

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

export const LeftLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`
export const Loader = () => {
  return (
    <Center>
      <LeftLoader />
    </Center>
  )
}
