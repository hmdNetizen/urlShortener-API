import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import bgIllustration from "../../images/illustration-working.svg";
import Form from "../Form";
import ShortenedUrlItem from "../ShortenedUrlItem";
const useStyles = makeStyles((theme) => ({
  topSectionContainer: {
    marginLeft: "8em",
    marginBottom: "10em",

    [theme.breakpoints.down("md")]: {
      marginLeft: "4em",
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  illustrationContainer: {
    width: "100%",
    height: "38em",
    position: "relative",

    [theme.breakpoints.down("xs")]: {
      height: "30em",
    },
  },
  illustration: {
    position: "absolute",
    right: "-2em",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      right: 0,
      left: "50%",
      transform: "translateX(-50%)",
      maxWidth: "50em",
      minWidth: "40em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "22em",
      transform: undefined,
    },
  },
  btn: {
    ...theme.typography.btn,
    borderRadius: 50,

    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  formParentContainer: {
    background: theme.palette.common.gray,
    paddingRight: "8em",
    paddingLeft: "8em",
    paddingTop: "7em",
    marginBottom: "10em",
    height: "50em",
    position: "relative",
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      direction="column"
      style={{ background: "#fff", overflowX: "hidden" }}
    >
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify={matchesSM ? "center" : undefined}
        className={classes.topSectionContainer}
      >
        <Grid
          item
          md={5}
          style={{
            order: matchesSM ? 2 : undefined,
            padding: matchesXS ? "0 2em" : 0,
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                align={matchesXS ? "center" : undefined}
                style={{
                  fontSize: matchesXS ? "2rem" : undefined,
                }}
              >
                More than just{" "}
                <br style={{ display: matchesXS ? "none" : undefined }} />{" "}
                shorter links
              </Typography>
            </Grid>
            <Grid item style={{ margin: matchesSM ? "1.5em 0" : 0 }}>
              <Typography
                variant="body1"
                align={matchesXS ? "center" : undefined}
                paragraph
                gutterBottom
              >
                Build your brand’s recognition and get detailed{" "}
                <br style={{ display: matchesXS ? "none" : undefined }} />{" "}
                insights on how your links are performing.
              </Typography>
            </Grid>
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
              <Button variant="contained" className={classes.btn}>
                Get started
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7} className={classes.illustrationContainer}>
          <img
            src={bgIllustration}
            alt="Illustration"
            className={classes.illustration}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.formParentContainer}
      >
        <Form />
      </Grid>
    </Grid>
  );
};

export default Homepage;
