import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { iJob } from "../interfaces";

interface iContext {
  jobs: iJob[];
  setJobs: Dispatch<SetStateAction<iJob[]>>;
}

const JobsContext = createContext<iContext>({
  jobs: [],
  setJobs: () => {},
} as iContext);

const { Provider } = JobsContext;

const JobsProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<iJob[]>([]);

  return <Provider value={{ jobs, setJobs }}>{children}</Provider>;
};

export { JobsContext, JobsProvider };
