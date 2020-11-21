import { iJob } from "../interfaces";

export default (jobs: iJob[]) => {
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
