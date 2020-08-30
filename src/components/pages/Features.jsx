import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  featureContainer: {
    minHeight: "80vh",
  },
}));

const Features = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.featureContainer}
    >
      <Grid item>
        <Typography variant="h2">Features</Typography>
      </Grid>
    </Grid>
  );
};

export default Features;
