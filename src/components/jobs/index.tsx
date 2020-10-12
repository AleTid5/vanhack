import React, { ReactNode } from "react";
import Jobs from "./Jobs";

interface Props {
  children: ReactNode;
  fetchingData: boolean;
}

export default ({ children, fetchingData }: Props) => {
  return <Jobs fetchingData={fetchingData}>{children}</Jobs>;
};
