import axios from "axios";
import { IJob } from "../../interfaces/IJob";

const maxResults = 100;
const buildUrl = (skipCount: number) =>
  `https://cors-anywhere.herokuapp.com/https://api-vanhack-prod.azurewebsites.net/v1/job/search/full/?MaxResultCount=${maxResults}&SkipCount=${skipCount}`;
const buildJobURL = (id: number) => `https://vanhack.com/platform/#/jobs/${id}`;
const buildSalary = (start?: number, end?: number) => end || start || null;
const jobs: IJob[] = [];

const scrapVanHack = async (skipCount: number = 0) => {
  const {
    data: {
      result: { items },
    },
  } = await axios.get(buildUrl(skipCount), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      requireHeader: ["origin", "x-requested-with"],
    },
  });

  jobs.push(
    ...items.map((job: IJob) => ({
      ...job,
      link: buildJobURL(job.id),
      salary: buildSalary(job.salaryRangeStart, job.salaryRangeEnd),
    }))
  );

  if (items.length === maxResults) {
    await scrapVanHack(skipCount + maxResults);
  }

  jobs.sort((currentJob: IJob, nextJob: IJob) =>
    currentJob.city < nextJob.city ? -1 : 1
  );

  jobs.sort((currentJob: IJob, nextJob: IJob) =>
    currentJob.salary > nextJob.salary ? -1 : 1
  );

  return jobs.sort((currentJob: IJob, nextJob: IJob) =>
    currentJob.country < nextJob.country ? -1 : 1
  );
};

export default scrapVanHack;
