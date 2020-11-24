import React, { useContext, useEffect, useState } from "react";
import { iJob } from "../../../interfaces";
import { FilterContext } from "../../../contexts/FilterContext";
import { Slider, Typography } from "@material-ui/core";
import styles from "./styles";

const RANGE_STEP: number = 10;

export default () => {
  const { jobs, salaryRange, setSalaryRange } = useContext(FilterContext);
  const [maxRange, setMaxRange] = useState<number>(0);
  const classes = styles();

  useEffect(() => {
    const salaries = jobs
      .filter(({ salary }: iJob) => salary)
      .map(({ salary }: iJob) => salary);

    const maxSalary: number = Math.max.apply(Math, salaries);
    setMaxRange(maxSalary);
    setSalaryRange([0, maxSalary]);
  }, [jobs, setSalaryRange]);

  const handleChange = (event: any, newSalaryRange: number | number[]) => {
    setSalaryRange(newSalaryRange as number[]);
  };

  const isNotInformed = () => salaryRange[0] === 0 && 0 === salaryRange[1];

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {isNotInformed()
          ? "Not informed"
          : `Salary range (${salaryRange[0]} - ${salaryRange[1]})`}
      </Typography>
      <Slider
        value={salaryRange}
        onChange={handleChange}
        aria-labelledby="range-slider"
        step={RANGE_STEP}
        valueLabelDisplay="auto"
        max={maxRange}
        style={{ color: "#34dc87" }}
      />
    </div>
  );
};
