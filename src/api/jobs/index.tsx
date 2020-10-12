import axios from "axios";
import { IJob } from "../../interfaces/IJob";

const maxResults = 10;
const buildUrl = (skipCount: number) =>
  `https://api-vanhack-prod.azurewebsites.net/v1/job/search/full/?MaxResultCount=${maxResults}&SkipCount=${skipCount}`;
const buildJobURL = (id: number) => `https://vanhack.com/platform/#/jobs/${id}`;
const buildSalary = (start?: number, end?: number) => end || start || null;
const jobs: IJob[] = [];

const scrapVanHack = async (skipCount: number = 0) => {
  const {
    data: {
      result: { items },
    },
  } = await axios.get(buildUrl(skipCount), {
    headers: { "Access-Control-Allow-Origin": "*" },
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

  return jobs.sort((currentJob: IJob, nextJob: IJob) =>
    currentJob.country < nextJob.country ? -1 : 1
  );
};

export default scrapVanHack;
