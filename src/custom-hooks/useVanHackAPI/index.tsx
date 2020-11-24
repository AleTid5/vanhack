import { useContext, useEffect } from "react";
import axios from "axios";
import { ConfigurationContext } from "../../contexts/ConfigurationContext";
import { iConfiguration, iJob } from "../../interfaces";
import { JobsContext } from "../../contexts/JobsContext";
import sortJobs from "../../helpers/SortJobs";

export default () => {
  const { configuration } = useContext(ConfigurationContext);
  const { jobs, setJobs } = useContext(JobsContext);
  const retrievedJobs: iJob[] = [];

  const fetchJobs = async (
    configuration: iConfiguration,
    skipCount: number = 0
  ) => {
    const {
      data: {
        result: { items },
      },
    } = await axios.get(
      `${configuration.baseURL}/v1/job/search/full/?MaxResultCount=${configuration.api.maxResults}&SkipCount=${skipCount}`,
      {
        headers: configuration.api.headers,
      }
    );

    retrievedJobs.push(
      ...items.map((job: iJob) => ({
        ...job,
        link: `${configuration.api.jobsURL}${job.id}`,
        salary: job.salaryRangeEnd || job.salaryRangeStart || null,
      }))
    );

    if (items.length === configuration.api.maxResults) {
      await fetchJobs(configuration, skipCount + configuration.api.maxResults);
    }

    return sortJobs(retrievedJobs);
  };

  useEffect(() => {
    fetchJobs(configuration).then(setJobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [jobs];
};
