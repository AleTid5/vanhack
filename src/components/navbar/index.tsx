import React, { useContext } from "react";
import {
  AppBar,
  Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";
import FlagFilter from "../filters/FlagFilter";

export default () => {
  const classes = styles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Van Hack</Typography>
        <FlagFilter />
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
      </Toolbar>
    </AppBar>
  );
};
