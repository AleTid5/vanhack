import React, { ReactNode } from "react";
import { Grid } from "@material-ui/core";
import styles from "./styles";

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => {
  const classes = styles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.spaceTop}
    >
      {children}
    </Grid>
  );
};
