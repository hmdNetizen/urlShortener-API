import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    minHeight: "80vh",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.loginContainer}
    >
      <Grid item>
        <Typography variant="h2">Login</Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
