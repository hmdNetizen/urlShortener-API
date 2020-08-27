import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import logo from "../../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#fff",
    paddingLeft: "7em",
    paddingRight: "7em",
    zIndex: theme.zIndex.modal + 1,

    [theme.breakpoints.down("md")]: {
      paddingLeft: "3em",
      paddingRight: "3em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  toolbarMargin: {
    marginBottom: "5em",
  },
  logoButton: {
    marginRight: "2em",
    "&:hover": {
      background: "transparent",
    },
  },
  tab: {
    color: theme.palette.common.gViolet,
    fontWeight: 700,
    textTransform: "none",
    minWidth: 10,
    opacity: 1,

    "&:not(:last-child)": {
      marginLeft: "2em",
    },

    "&:last-child": {
      marginLeft: "auto",
    },

    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  indicatorColor: {
    background: "transparent",
  },
  tabSelected: {
    color: theme.palette.common.darkViolet,
  },
  signupBtn: {
    ...theme.typography.btn,
    borderRadius: 50,
    marginLeft: "2em",

    "&:hover": {
      background: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 120,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90vw",
    },
  },
  menu: {
    height: 40,
    width: 40,
    color: theme.palette.common.darkViolet,
  },
  drawer: {
    background: theme.palette.common.violet,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      minWidth: "15em",
      marginTop: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingTop: "1em",
      paddingBottom: "2.5em",
      paddingLeft: "2em",
      paddingRight: "2em",
      marginTop: "4.7em",
    },
  },
  listItem: {
    textAlign: "center",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    display: "block",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em 0",
    },
    [theme.breakpoints.down("xs")]: {
      //   "&:nth-child(3)": {
      //     borderBottom: `1px solid ${theme.palette.common.gViolet}`,
      //     marginBottom: "2em",
      //   },
      padding: "1em 0",
    },
  },
  listItemText: {
    "& .MuiTypography-body1": {
      fontSize: "1.2rem",
    },
  },

  listItemSelected: {
    background: theme.palette.primary.dark,
  },

  drawerButton: {
    fontSize: "1.2rem",
    minHeight: 48,
    display: "block",
    margin: "0 auto",

    [theme.breakpoints.down("sm")]: {
      minWidth: 150,
      marginTop: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigationTabs = [
    { id: 0, title: "Features", route: "/features" },
    { id: 1, title: "Pricing", route: "/pricing" },
    { id: 2, title: "Resources", route: "/resources" },
    { id: 3, title: "Login", route: "/login" },
  ];

  useEffect(() => {
    navigationTabs.forEach((navTab) => {
      switch (window.location.pathname) {
        case navTab.route:
          if (value !== navTab.id) {
            setValue(navTab.id);
          }
          break;
        case "/":
          setValue(4);
          break;
        case "/signup":
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [value, navigationTabs]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        centered
        classes={{ indicator: classes.indicatorColor }}
        style={{ width: "100%" }}
      >
        {navigationTabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.title}
            component={Link}
            to={tab.route}
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/signup"
        variant="contained"
        className={classes.signupBtn}
        onClick={() => setValue(5)}
      >
        Sign Up
      </Button>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        elevation={0}
        open={openDrawer}
        anchor={matchesXS ? "top" : "left"}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          {navigationTabs.map((navTab) => (
            <ListItem
              key={navTab.id}
              component={Link}
              to={navTab.route}
              divider={!matchesXS}
              className={classes.listItem}
              onClick={() => setOpenDrawer(false)}
              selected={value === navTab.id}
              classes={{ selected: classes.listItemSelected }}
            >
              <ListItemText
                className={classes.listItemText}
                style={{
                  color:
                    value === navTab.id ? "#fff" : theme.palette.common.gViolet,
                  fontSize: "2rem",
                }}
              >
                {navTab.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          className={`${classes.signupBtn} ${classes.drawerButton}`}
          onClick={() => {
            setValue(5);
            setOpenDrawer(false);
          }}
        >
          Sign Up
        </Button>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        {openDrawer ? (
          <Close className={classes.menu} />
        ) : (
          <MenuIcon className={classes.menu} />
        )}
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position="fixed" elevation={0} classes={{ root: classes.appBar }}>
        <Toolbar className={classes.toolbar}>
          <Button
            disableRipple
            component={Link}
            to="/"
            className={classes.logoButton}
            onClick={() => {
              setValue(4);
              setOpenDrawer(false);
            }}
          >
            <img src={logo} alt="Application Logo" />
          </Button>

          {matchesSM ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
