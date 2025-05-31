import React from "react";
import styled from "styled-components";

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <TitleWrapper>{children}</TitleWrapper>;
}


const TitleWrapper = styled.h1`
   font-weight: bold;
   font-size: 24px;
   line-height: 28px;
   color: #121111; 
   margin:0
`;




export default Title;
