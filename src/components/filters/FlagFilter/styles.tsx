import { makeStyles, Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    marginFlag: {
      marginTop: "5px",
      marginRight: "5px",
    },
    form: {
      width: "150px",
      marginLeft: "15px",
    },
  })
);
