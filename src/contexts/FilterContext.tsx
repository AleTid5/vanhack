import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { iJob } from "../interfaces";

interface iProps {
  children: ReactNode;
  jobs: iJob[];
}

interface iContext {
  jobs: iJob[];
  countries: string[];
  setCountries: Dispatch<SetStateAction<string[]>>;
  technologies: string[];
  setTechnologies: Dispatch<SetStateAction<string[]>>;
  salaryRange: number[];
  setSalaryRange: Dispatch<SetStateAction<number[]>>;
}

const FilterContext = createContext<iContext>({
  jobs: [],
  countries: [],
  setCountries: () => {},
  technologies: [],
  setTechnologies: () => {},
  salaryRange: [],
  setSalaryRange: () => {},
} as iContext);

const { Provider } = FilterContext;

const FilterProvider = ({ children, jobs }: iProps) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<number[]>([]);

  return (
    <Provider
      value={{
        jobs,
        countries,
        setCountries,
        technologies,
        setTechnologies,
        salaryRange,
        setSalaryRange,
      }}
    >
      {children}
    </Provider>
  );
};

export { FilterContext, FilterProvider };
