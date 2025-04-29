import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

function Desc({ children }: TitleProps) {
  return <h4>{children}</h4>;
}
export default Desc;
