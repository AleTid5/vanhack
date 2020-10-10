import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles";

export default () => {
  const classes = styles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Zuper</Typography>
        <Box className={classes.features}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Descripcion</Button>
          <Button color="inherit">Tu compra Zuper</Button>
          <Button color="inherit">Funcionalidades</Button>
          <Button color="inherit">Ahorro</Button>
          <Button color="inherit">Nosotros</Button>
          <Button color="inherit">Beta</Button>
          <Button color="inherit">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
