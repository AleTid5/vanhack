import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import useVanHackAPI from "../../custom-hooks/useVanHackAPI";
import { iJob } from "../../interfaces";
import Navbar from "../../components/navbar";
import Jobs from "../../components/jobs";
import Job from "../../components/job";
import styles from "./styles";
import { FilterProvider } from "../../contexts/FilterContext";

let fetchedItems = false;

export default () => {
  const [jobs, setJobs] = useState<iJob[]>([]);
  const [items] = useVanHackAPI();
  const classes = styles();

  useEffect(() => {
    setJobs(items);
  }, [items]);

  return (
    <>
      <FilterProvider jobs={items} setJobs={setJobs}>
        <Navbar />
      </FilterProvider>
      <Container className={classes.center}>
        <Jobs fetchingData={jobs.length === 0}>
          {jobs.map((job: iJob, key: number) => (
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
