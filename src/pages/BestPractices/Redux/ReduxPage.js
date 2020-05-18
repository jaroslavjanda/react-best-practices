import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { H1 } from "../../../components/Typography";
import * as routes from "../../../routes";
import { Text } from "../../GetStarted/styled";
const Redux = ({ history }) => {
  return (
    <>
      <H1 textAlign="center">Redux</H1>
      <Text>Redux is a predictable state container for JavaScript apps.</Text>
      <Button onClick={() => history.push(routes.REDUX_STUDENTS)}>
        I wanna see example 🤩
      </Button>
    </>
  );
};

export default Redux;
