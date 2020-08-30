import React, { Fragment, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import bgShorten from "../images/bg-shorten-desktop.svg";
import ShortenedUrl from "./ShortenedUrl";
import shortenerContext from "../context/shortenerContext/shortenerContext";

const Form = () => {
  const {
    url,
    value,
    loading,
    getShortenedUrl,
    validateUrl,
    setValue,
    valueHelper,
    isInvalid,
    alert,
    setAlert,
    existingURL,
    existingUrlHelper,
  } = useContext(shortenerContext);

  const useStyles = makeStyles((theme) => ({
    inputContainer: {
      backgroundImage: `url(${bgShorten})`,
      backgroundColor: theme.palette.common.violet,
      backgroundSize: "cover",
      height: "10em",
      position: "absolute",
      width: "83.5%",
      left: "50%",
      top: "-5em",
      transform: "translateX(-50%)",
      borderRadius: 5,

      [theme.breakpoints.down("md")]: {
        width: "90%",
      },

      [theme.breakpoints.down("sm")]: {
        height: "13em",
      },
    },
    form: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      paddingLeft: "5em",
      paddingRight: "5em",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        paddingLeft: "2.5em",
        paddingRight: "2.5em",
      },

      [theme.breakpoints.down("xs")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
      },
    },
    inputBtn: {
      ...theme.typography.btn,
      fontSize: "1rem",
      minWidth: 150,
      minHeight: 55,
      marginLeft: "1em",

      "&:hover": {
        background: theme.palette.secondary.light,
      },

      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        marginTop: "1em",
      },
    },
    formInput: {
      border: "none",
      borderRadius: 5,
      background: "#fff",

      "&::placeholder": {
        color:
          isInvalid || alert || existingURL
            ? theme.palette.common.red
            : undefined,
      },
    },
    helperText: {
      fontSize: ".85rem",
      fontStyle: "italic",
    },
    progress: {
      color: theme.palette.secondary.dark,
    },
  }));
  const classes = useStyles();

  const handleUrlSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      getShortenedUrl(value);
    } else {
      setAlert("Please add a link");
    }
    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(url));
  });

  return (
    <Fragment>
      <Grid
        item
        container
        alignItems="center"
        className={classes.inputContainer}
      >
        <form
          onSubmit={handleUrlSubmit}
          autoComplete="off"
          className={classes.form}
        >
          <TextField
            type="text"
            fullWidth
            error={
              valueHelper !== "" || alert !== "" || existingUrlHelper !== ""
            }
            helperText={valueHelper || alert || existingUrlHelper}
            placeholder="Shorten a link here..."
            variant="outlined"
            value={value}
            onChange={(e) => validateUrl(e.target.value)}
            FormHelperTextProps={{ className: classes.helperText }}
            InputProps={{
              classes: { input: classes.formInput },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.inputBtn}
          >
            {loading ? (
              <CircularProgress
                classes={{ indeterminate: classes.progress }}
                variant="indeterminate"
                color="primary"
              />
            ) : (
              "Shorten It!"
            )}
          </Button>
        </form>
      </Grid>
      <ShortenedUrl links={url} />
    </Fragment>
  );
};

export default Form;
