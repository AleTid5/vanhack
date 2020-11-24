import React, { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { iJob, iSkill } from "../../interfaces";
import { FilterProvider } from "../../contexts/FilterContext";
import Filters from "../filters";

interface iProps {
  jobs: iJob[];
}

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

export default (Component: React.FunctionComponent<iProps>) => ({
  items,
}: {
  items: iJob[];
}) => {
  const [jobs, setJobs] = useState<iJob[]>([]);
  const [isSnackbarOpened, setIsSnackbarOpened] = useState<boolean>(false);

  useEffect(() => setJobs(items), [items]);

  const handleFilter = (...filters: any) => {
    const [countries, [minSalary, maxSalary], technologies] = filters;
    let filteredJobs: iJob[] = items;

    if (countries.length > 0) {
      filteredJobs = filteredJobs.filter((job: iJob) =>
        countries.includes(job.country)
      );
    }

    filteredJobs = filteredJobs.filter(
      (job: iJob) => job.salary >= minSalary && job.salary <= maxSalary
    );

    if (technologies.length > 0) {
      filteredJobs = filteredJobs.filter((job: iJob) =>
        technologies.some(
          (technology: string) =>
            job.mustHaveSkills?.some(({ name }: iSkill) =>
              name.toLowerCase().includes(technology)
            ) ||
            job.niceToHaveSkills?.some(({ name }: iSkill) =>
              name.toLowerCase().includes(technology)
            )
        )
      );
    }

    if (filteredJobs.length > 0) {
      setJobs(filteredJobs);
    } else {
      setIsSnackbarOpened(true);
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpened(false);
  };

  return (
    <FilterProvider jobs={items}>
      <Component jobs={jobs} />
      <Filters onFilter={handleFilter} />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSnackbarOpened}
        onClose={handleCloseSnackbar}
        autoHideDuration={6000}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          There are no jobs that fulfill the applied filters
        </Alert>
      </Snackbar>
    </FilterProvider>
  );
};
