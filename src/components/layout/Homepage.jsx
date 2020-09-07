import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Form from "../Form";

import bgIllustration from "../../images/illustration-working.svg";
import brandIcon from "../../images/icon-brand-recognition.svg";
import detailedIcon from "../../images/icon-detailed-records.svg";
import customizableIcon from "../../images/icon-fully-customizable.svg";
import bgBoostDesktop from "../../images/bg-boost-desktop.svg";
import bgBoostMobile from "../../images/bg-boost-mobile.svg";

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
    paddingBottom: "7em",
    position: "relative",
    maxWidth: "100%",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "4em",
      paddingRight: "4em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2.5em",
      paddingRight: "2.5em",
      paddingTop: "10em",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1.8em",
      paddingRight: "1.8em",
    },
  },
  paper: {
    padding: "3em 1.5em 2em",
    width: "22em",
    minWidth: "20em",
    maxWidth: "25em",
    height: "20em",
    position: "relative",
    zIndex: "9",
    margin: "0 auto",

    [theme.breakpoints.down("md")]: {
      minWidth: "25em",
      maxWidth: "30em",
    },

    [theme.breakpoints.down("sm")]: {
      minWidth: "30em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      minWidth: "100%",
      minHeight: "20em",
    },
  },
  icon: {
    background: theme.palette.common.violet,
    width: 80,
    height: 80,
    padding: "1em",
    position: "absolute",
    top: -40,
    left: 40,

    [theme.breakpoints.down("sm")]: {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  cardHeader: {
    marginTop: "1.5em",
    marginBottom: ".75em",

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  cyanBorder: {
    width: "40em",
    height: 10,
    background: "cyan",
    position: "absolute",
    top: "10em",
    left: "50%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("sm")]: {
      top: "50%",
      transform: "translate(-50%, -50%) rotate(-90deg)",
    },
  },
  bottomGridContainer: {
    paddingTop: "5em",
    paddingBottom: "5em",
    backgroundColor: theme.palette.common.violet,
    backgroundImage: `url(${bgBoostDesktop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${bgBoostMobile})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
}));

const Homepage = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
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
              <Button
                variant="contained"
                component={Link}
                to="/signup"
                onClick={() => setValue(5)}
                className={classes.btn}
              >
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
        <Grid
          item
          container
          direction="column"
          style={{ marginTop: "3.5em", marginBottom: "5em" }}
        >
          <Grid item style={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              gutterBottom
              style={{ fontSize: matchesXS ? "1.5rem" : undefined }}
            >
              Advanced Statistics
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Typography variant="body2" paragraph>
              Track how your links are performing across the web with <br /> our
              advanced statistics dashboard.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesMD ? "center" : undefined}
          style={{ position: "relative" }}
        >
          <Grid item md={6} lg>
            <Paper classes={{ root: classes.paper }}>
              <Grid container direction="column" justify="space-between">
                <Grid item>
                  <Avatar
                    size={20}
                    src={brandIcon}
                    alt="BrandIcon"
                    className={classes.icon}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" className={classes.cardHeader}>
                    Brand Recognition
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body2"
                  >
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={6} lg>
            <Paper
              style={{
                marginRight: matchesSM ? "auto" : "2em",
                marginLeft: matchesSM ? "auto" : "2em",
                marginTop: matchesSM ? "7em" : matchesMD ? 0 : "2.5em",
              }}
              classes={{ root: classes.paper }}
            >
              <Grid container direction="column">
                <Grid item>
                  <Avatar
                    src={detailedIcon}
                    alt="Detailed Icon"
                    className={classes.icon}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" className={classes.cardHeader}>
                    Detailed Records
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body2"
                  >
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={12} lg>
            <Paper
              classes={{ root: classes.paper }}
              style={{ marginTop: matchesMD ? "7em" : "5em" }}
            >
              <Grid container direction="column">
                <Grid item>
                  <Avatar
                    src={customizableIcon}
                    alt="Customizable Icon"
                    className={classes.icon}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" className={classes.cardHeader}>
                    Fully Customizable
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body2"
                  >
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Divider
            orientation={matchesSM ? "vertical" : "horizontal"}
            className={classes.cyanBorder}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.bottomGridContainer}
      >
        <Grid item>
          <Typography
            variant="h3"
            gutterBottom
            style={{ color: "#fff", marginBottom: "1em" }}
          >
            Boost your links today
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            onClick={() => setValue(5)}
            className={classes.btn}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
