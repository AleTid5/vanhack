import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Job from "../Job";
import { iJob } from "../../interfaces";
import withFilteredNavbar from "../WithFilteredNavbar";

export default withFilteredNavbar(({ items }: { items: iJob[] }) => {
  const [jobs, setJobs] = useState<iJob[]>([]);

  useEffect(() => {
    setJobs(items);
  }, [items]);

  return (
    <Jobs fetchingData={jobs.length === 0}>
      {jobs.map((job: iJob, key: number) => (
        <Job
          key={key}
          jump={key === 0 || (key > 0 && job.country !== jobs[key - 1].country)}
          {...job}
        />
      ))}
    </Jobs>
  );
});
