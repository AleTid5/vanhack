import { ISkill } from "./ISkill";

export interface IJob {
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
  mustHaveSkills?: ISkill[];
  niceToHaveSkills?: ISkill[];
  salaryRangeStart?: number;
  salaryRangeEnd?: number;
  company?: string;
  currency?: string;
}
