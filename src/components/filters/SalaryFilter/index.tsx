import React, { useContext, useEffect } from "react";
import { iJob } from "../../../interfaces";
import { FilterContext } from "../../../contexts/FilterContext";
import { Slider, Typography } from "@material-ui/core";
import styles from "./styles";

function valuetext(value: number) {
  return `${value}K`;
}

export default () => {
  const { jobs, salaryRange, setSalaryRange } = useContext(FilterContext);
  const classes = styles();

  useEffect(() => {
    const salaries = jobs
      .filter(({ salary }: iJob) => salary)
      .map(({ salary }: iJob) => salary);

    setSalaryRange([
      Math.min.apply(Math, salaries),
      Math.max.apply(Math, salaries),
    ]);
  }, [jobs]);

  const handleChange = (event: any, newSalaryRange: number | number[]) => {
    setSalaryRange(newSalaryRange as number[]);
    console.log(newSalaryRange);
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        Salary range
      </Typography>
      <Slider
        value={salaryRange}
        getAriaValueText={valuetext}
        onChange={handleChange}
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="auto"
      />
    </div>
  );
};
