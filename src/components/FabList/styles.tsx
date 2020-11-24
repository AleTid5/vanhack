import { makeStyles, Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    itemList: {
      position: "fixed",
      width: "100%",
      maxWidth: 360,
      bottom: theme.spacing(10),
      backgroundColor: "#fbfbfb",
      borderRadius: "10px",
      border: "1px solid #d9d9d9",
    },
    rotate: {
      transform: "rotate(45deg)",
    },
  })
);
