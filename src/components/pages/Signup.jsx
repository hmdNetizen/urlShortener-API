import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  signupContainer: {
    minHeight: "80vh",
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.signupContainer}
    >
      <Grid item>
        <Typography variant="h2">Sign Up</Typography>
      </Grid>
    </Grid>
  );
};

export default Signup;
