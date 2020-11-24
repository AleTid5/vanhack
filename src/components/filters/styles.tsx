import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  salaryAvatar: {
    cursor: "pointer",
  },
  avatarPulse: {
    boxShadow: "0 0 0 rgba(28, 189, 107, 0.4)",
    animation: "$pulse 2s infinite",
    "&:hover": {
      animation: "none",
    },
  },
  "@keyframes pulse": {
    "0%": {
      "-moz-box-shadow": "0 0 0 0 rgba(28, 189, 107, 0.4)",
      "-webkit-box-shadow": "0 0 0 0 rgba(28, 189, 107, 0.4)",
      "box-shadow": "0 0 0 0 rgba(28, 189, 107, 0.4)",
    },
    "70%": {
      "-moz-box-shadow": "0 0 0 10px rgba(28, 189, 107, 0)",
      "-webkit-box-shadow": "0 0 0 10px rgba(28, 189, 107, 0)",
      "box-shadow": "0 0 0 10px rgba(28, 189, 107, 0)",
    },
    "100%": {
      "-moz-box-shadow": "0 0 0 0 rgba(28, 189, 107, 0)",
      "-webkit-box-shadow": "0 0 0 0 rgba(28, 189, 107, 0)",
      "box-shadow": "0 0 0 0 rgba(28, 189, 107, 0)",
    },
  },
});
