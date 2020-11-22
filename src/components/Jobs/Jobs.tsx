import React, { ReactNode } from "react";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import styles from "./styles";

interface Props {
  children: ReactNode;
  fetchingData: boolean;
}

export default ({ children, fetchingData }: Props) => {
  const classes = styles();

  return (
    <Container className={classes.center}>
      {fetchingData ? (
        <CircularProgress size={150} style={{ marginTop: "25%" }} />
      ) : (
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
      )}
    </Container>
  );
};
