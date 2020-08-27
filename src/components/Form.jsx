import React, { Fragment, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import bgShorten from "../images/bg-shorten-desktop.svg";
import ShortenedUrl from "./ShortenedUrl";

const Form = () => {
  const [alert, setAlert] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const useStyles = makeStyles((theme) => ({
    inputContainer: {
      backgroundImage: `url(${bgShorten})`,
      backgroundColor: theme.palette.common.violet,
      backgroundSize: "cover",
      height: "10em",
      position: "absolute",
      width: "84%",
      left: "50%",
      top: "-5em",
      transform: "translateX(-50%)",
      borderRadius: 5,
    },
    form: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      paddingLeft: "5em",
      paddingRight: "5em",
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
    },
    formInput: {
      border: "none",
      background: "#fff",

      "&::placeholder": {
        color: isInvalid || alert ? theme.palette.common.red : undefined,
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
  const theme = useTheme();
  const [value, setValue] = useState("");
  const [valueHelper, setvalueHelper] = useState("");
  const [url, setUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  const validateUrl = (e) => {
    let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    let valid = regex.test(e.target.value);

    setValue(e.target.value);

    if (!valid) {
      setvalueHelper("Link is not valid");
      setIsInvalid(true);
    } else {
      setvalueHelper("");
      setAlert("");
      setIsInvalid(false);
    }
  };

  const handleUrlShortener = async (inputUrl) => {
    setLoading(true);
    let response;
    try {
      response = await axios.post("https://rel.ink/api/links/", {
        url: inputUrl,
      });
      setUrl([response.data, ...url]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const findExistingUrl = () => {
    return url.some((link) => link.url);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      setAlert("Please add a link");
    } else if (findExistingUrl) {
      console.log("Link already existed");
    } else {
      handleUrlShortener(value);
    }
    setValue("");
  };

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
            error={valueHelper !== "" || alert !== ""}
            helperText={valueHelper || alert}
            placeholder="Shorten a link here..."
            variant="outlined"
            value={value}
            onChange={validateUrl}
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
