import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/fonts/colors";

const Button = ({ text, sym, backgroundcolor = colors.blue }) => {
  return (
    <Cont
      className="flex justify-center align-center m-8 gap-2 "
      color={colors}
    >
      <div>{sym}</div>
      <div>{text}</div>
    </Cont>
  );
};

export default Button;

const Cont = styled.div`
  color: ${colors.blue};
  display: inline-flex;
  padding: 1rem 4rem;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.white};
    color: ${(props) => props.color};
    transition: 0.25s all ease-in-out;
    box-shadow: 3px 3px 7px rgba(25, 47, 18, 0.2);
  }
`;
