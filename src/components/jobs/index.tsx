import React, { ReactNode } from "react";
import Jobs from "./Jobs";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  return <Jobs>{children}</Jobs>;
};
