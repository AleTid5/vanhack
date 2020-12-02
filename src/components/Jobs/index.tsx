import React from "react";
import Jobs from "./Jobs";
import Job from "../Job";
import { iJob } from "../../interfaces";
import withFilters from "../WithFilters";

export default withFilters(({ jobs }: { jobs: iJob[] }) => {
  return (
    <Jobs fetchingData={jobs.length === 0}>
      {jobs.map((job: iJob, key: number) => (
        <Job
          key={key}
          showMainCountry={
            key === 0 || (key > 0 && job.country !== jobs[key - 1].country)
          }
          {...job}
        />
      ))}
    </Jobs>
  );
});
