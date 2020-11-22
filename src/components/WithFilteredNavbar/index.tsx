import React from "react";
import { iJob } from "../../interfaces";
import Navbar from "../Navbar";
import { FilterProvider } from "../../contexts/FilterContext";

interface iProps {
  items: iJob[];
}

export default (Component: React.FunctionComponent<iProps>) => {
  return ({ jobs }: { jobs: iJob[] }) => {
    return (
      <>
        <FilterProvider jobs={jobs}>
          <Navbar />
          <Component items={jobs} />
        </FilterProvider>
      </>
    );
  };
};
