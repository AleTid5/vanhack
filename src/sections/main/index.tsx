import React, { useEffect, useState } from "react";
import jobsAPI from "../../api/jobs";
import { IJob } from "../../interfaces/IJob";
import Navbar from "../../components/navbar";
import Jobs from "../../components/jobs";
import Job from "../../components/job";
import { Container } from "@material-ui/core";
import styles from "./styles";

export default () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const classes = styles();

  useEffect(() => {
    jobsAPI().then(setJobs);
  }, []);

  return (
    <>
      <Navbar />
      <Container className={classes.center}>
        <Jobs fetchingData={jobs.length === 0}>
          {jobs.map((job: IJob, key: number) => (
            <Job
              key={key}
              jump={
                key === 0 || (key > 0 && job.country !== jobs[key - 1].country)
              }
              {...job}
            />
          ))}
        </Jobs>
      </Container>
    </>
  );
};
