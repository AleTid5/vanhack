import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";
import FlagFilter from "../filters/FlagFilter";
import TechnologyFilter from "../filters/TechnologyFilter";
import SalaryFilter from "../filters/SalaryFilter";

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
        <TechnologyFilter />
        <SalaryFilter />
      </Toolbar>
    </AppBar>
  );
};
