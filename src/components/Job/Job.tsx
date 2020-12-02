import React, {ReactNode} from "react";
import {Grid} from "@material-ui/core";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default ({ children, onClick }: Props) => {
  return (
    <Grid item xs={12} sm={3} onClick={onClick}>
      {children}
    </Grid>
  );
};
