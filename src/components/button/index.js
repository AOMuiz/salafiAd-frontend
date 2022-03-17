import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/fonts/colors";

const Button = ({ text, sym }) => {
  return (
    <Cont className="flex justify-center align-center p-2 gap-2">
      <div>{sym}</div>
      <div>{text}</div>
    </Cont>
  );
};

export default Button;

const Cont = styled.div`
  background-color: ${colors.blue};
`;
