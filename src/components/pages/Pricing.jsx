import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pricingContainer: {
    minHeight: "80vh",
  },
}));

const Pricing = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.pricingContainer}
    >
      <Grid item>
        <Typography variant="h2">Pricing</Typography>
      </Grid>
    </Grid>
  );
};

export default Pricing;
