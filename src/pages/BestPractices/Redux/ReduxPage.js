import React, { useState } from 'react'
import { Button } from '../../../components/Button'
import { H1 } from '../../../components/Typography'
import * as routes from '../../../routes'
const Redux = ({ history }) => {
  return (
    <>
      <H1 textAlign="center">👇 Redux 👇</H1>
      <Button onClick={() => history.push(routes.REDUX_STUDENTS)}>
        I wanna see example 🤩
      </Button>
    </>
  )
}

export default Redux
