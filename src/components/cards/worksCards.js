import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/fonts/colors";

const HowItWorks = ({ title, subtitle }) => {
  return (
    <Cont>
      <div>
        <h1 className="text-6xl	">How It Works</h1>
      </div>
      <div className="flex justify-center align-middle gap-4 m-2">
        <div>
          <div className="p-16  bg-white rounded-md">
            <h1 className="py-6 text-left	">Create Account</h1>
            <p className=" text-left	">{subtitle}</p>
          </div>
        </div>
        <div>
          <div className="p-16 bg-white rounded-md">
            <h1 className="py-6 text-left	">Create Account</h1>
            <p className=" text-left	">
              Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices
              Posuere Cubilia Curae. Donec Non Lorem Erat. Sed Vitae Vene.
            </p>
          </div>
        </div>
        <div>
          <div className="p-16 bg-white rounded-md">
            <h1 className="py-6 text-left	">Create Account</h1>
            <p className=" text-left	">
              Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices
              Posuere Cubilia Curae. Donec Non Lorem Erat. Sed Vitae Vene.
            </p>
          </div>
        </div>
      </div>
    </Cont>
  );
};

export default HowItWorks;

const Cont = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  background-color: ${colors.ghostwhite};
  height: 35rem;
  padding: 7rem 3rem;
`;
