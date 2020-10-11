import React, { useEffect, useState } from "react";
import jobsAPI from "../../api/jobs";
import { IJob } from "../../interfaces/IJob";
import Navbar from "../../components/navbar";
import Jobs from "../../components/jobs";
import Job from "../../components/job";

export default () => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  useEffect(() => {
    jobsAPI().then(setJobs);
  }, []);

  return (
    <>
      <Navbar />
      <Jobs>
        {jobs.map((job: IJob, key: number) => (
          <Job
            key={key}
            jump={key > 0 && job.country !== jobs[key - 1].country}
            {...job}
          />
        ))}
      </Jobs>
    </>
  );
};
