export interface iConfiguration {
  baseURL: string;
  api: {
    maxResults: number;
    jobsURL: string;
    headers: object;
  };
  countries: any;
}

export interface iJob {
  id: number;
  link: string;
  positionName: string;
  description: string;
  descriptionHtml: string;
  city: string;
  country: string;
  postDate: string;
  jobType: string;
  salary: number;
  mustHaveSkills?: iSkill[];
  niceToHaveSkills?: iSkill[];
  salaryRangeStart?: number;
  salaryRangeEnd?: number;
  company?: string;
  currency?: string;
}

export interface iSkill {
  id: number;
  name: string;
  match: boolean;
  minYearsOfExperience?: number;
}
