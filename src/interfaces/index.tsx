export interface iConfiguration {
  baseURL: string;
  countries: any;
  api: {
    headers: object;
    jobsURL: string;
    maxResults: number;
  };
}

export interface iJob {
  id: number;
  city: string;
  company?: string;
  country: string;
  currency?: string;
  description: string;
  descriptionHtml: string;
  jobType: string;
  link: string;
  mustHaveSkills?: iSkill[];
  newJob: boolean;
  niceToHaveSkills?: iSkill[];
  positionName: string;
  postDate: string;
  salary: number;
  salaryRangeEnd?: number;
  salaryRangeStart?: number;
}

export interface iSkill {
  id: number;
  match: boolean;
  minYearsOfExperience?: number;
  name: string;
}
