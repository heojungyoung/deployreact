import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}
export default Title;
