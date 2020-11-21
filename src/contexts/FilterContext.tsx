import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import { iJob } from "../interfaces";

interface iContext {
  jobs: iJob[];
  setJobs: Dispatch<SetStateAction<iJob[]>>;
}

interface iProps {
  children: ReactNode;
  jobs: iJob[];
  setJobs: Dispatch<SetStateAction<iJob[]>>;
}

const FilterContext = createContext<iContext>({
  jobs: [],
  setJobs: () => {},
} as iContext);

const { Provider } = FilterContext;

const FilterProvider = ({ children, jobs, setJobs }: iProps) => (
  <Provider value={{ jobs, setJobs }}>{children}</Provider>
);

export { FilterContext, FilterProvider };
