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
  const [existingUrl, setExistingUrl] = useState("");

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
          isInvalid || alert || existingUrl
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

  const findExistingUrl = () => {
    return url.length > 0 && url.some((link) => value === link.url);
  };

  const handleUrlShortener = async (inputUrl) => {
    let exist = findExistingUrl();
    let response;

    if (exist) {
      setExistingUrl("Link already exist");
    } else {
      setLoading(true);
      try {
        response = await axios.post("https://rel.ink/api/links/", {
          url: inputUrl,
        });
        setUrl([response.data, ...url]);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
      setExistingUrl("");
    }
  };

  const handleUrlSubmit = (e) => {
    const exist = findExistingUrl();
    e.preventDefault();

    if (value.trim() !== "") {
      handleUrlShortener(value);
    } else {
      setAlert("Please add a link");
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
            error={valueHelper !== "" || alert !== "" || existingUrl !== ""}
            helperText={valueHelper || alert || existingUrl}
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
