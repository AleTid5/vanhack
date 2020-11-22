import React from "react";
import { TextField } from "@material-ui/core";

export default () => {
  //const { jobs, setJobs } = useContext(FilterContext);

  return (
    <TextField
      id="outlined-basic"
      label="Enter at least 3 characters"
      variant="outlined"
      size="small"
      color="primary"
      style={{
        minWidth: "240px",
      }}
    />
  );
};
