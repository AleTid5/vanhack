import { iConfiguration, iJob } from "../../interfaces";
import axios from "axios";

const jobs: iJob[] = [];

export const fetchJobs = async (
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

  jobs.push(
    ...items.map((job: iJob) => ({
      ...job,
      link: `${configuration.api.jobsURL}${job.id}`,
      salary: job.salaryRangeEnd || job.salaryRangeStart || null,
    }))
  );

  if (items.length === configuration.api.maxResults) {
    await fetchJobs(configuration, skipCount + configuration.api.maxResults);
  }

  jobs.sort((currentJob: iJob, nextJob: iJob) =>
    currentJob.city < nextJob.city ? -1 : 1
  );

  jobs.sort((currentJob: iJob, nextJob: iJob) =>
    currentJob.salary > nextJob.salary ? -1 : 1
  );

  return jobs.sort((currentJob: iJob, nextJob: iJob) =>
    currentJob.country < nextJob.country ? -1 : 1
  );
};
