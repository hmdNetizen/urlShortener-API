import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  resourcesContainer: {
    minHeight: "80vh",
  },
}));

const Resources = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.resourcesContainer}
    >
      <Grid item>
        <Typography variant="h2">Resources</Typography>
      </Grid>
    </Grid>
  );
};

export default Resources;
