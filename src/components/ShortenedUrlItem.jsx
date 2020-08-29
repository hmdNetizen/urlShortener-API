import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shortenedUrlContainer: {
    background: "#fff",
    padding: "1em 2em",
    borderRadius: 5,
    marginBottom: "1.5em",
    maxWidth: "100%",

    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  copyButton: {
    ...theme.typography.btn,
    marginLeft: "1.5em",

    "&:hover": {
      background: theme.palette.secondary.light,
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      minWidth: "100%",
    },
  },
  originalUrl: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "40ch",
    color: theme.palette.common.violet,

    [theme.breakpoints.down("sm")]: {
      margin: "1em 2em",
      textAlign: "center",
      maxWidth: "100%",
    },

    [theme.breakpoints.down("xs")]: {
      margin: "1em",
      maxWidth: "25ch",
      textAlign: "inherit",
    },
  },
  shortUrl: {
    display: "block",
    textDecoration: "none",
    color: theme.palette.common.cyan,
    fontSize: ".9rem",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      margin: "1em 2em",
    },

    [theme.breakpoints.down("xs")]: {
      margin: "1em",
    },
  },
  divider: {
    background: theme.palette.common.gray,
    minWidth: "100%",
    marginTop: ".85em",
  },
}));

const ShortenedUrlItem = ({ link }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [copied, setCopied] = useState(false);

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      justify={matchesSM ? undefined : "space-between"}
      alignItems={matchesSM ? undefined : "center"}
      className={classes.shortenedUrlContainer}
    >
      <Grid item style={{ maxWidth: matchesSM ? "100%" : undefined }}>
        <Typography variant="body2" className={classes.originalUrl}>
          {link.url}
        </Typography>
        {matchesSM && (
          <Divider
            variant="fullWidth"
            component="hr"
            classes={{ root: classes.divider }}
          />
        )}
      </Grid>

      <Grid item>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? undefined : "center"}
          style={{ maxWidth: matchesSM ? "100%" : undefined }}
        >
          <Grid
            item
            style={{
              textAlign: matchesXS
                ? undefined
                : matchesSM
                ? "center"
                : undefined,
            }}
          >
            <a
              href={`https://rel.ink/${link.hashid}`}
              className={classes.shortUrl}
            >
              {`https://rel.ink/${link.hashid}`}
            </a>
          </Grid>
          <Grid
            item
            style={{
              width: matchesSM ? "100%" : undefined,
              paddingLeft: matchesSM ? "1em" : 0,
              paddingRight: matchesSM ? "1em" : 0,
              paddingBottom: matchesSM ? "1em" : 0,
            }}
          >
            <CopyToClipboard
              text={`https://rel.ink/${link.hashid}`}
              onCopy={() => setCopied(!copied)}
            >
              <Button
                variant="contained"
                style={{
                  background: copied && theme.palette.common.violet,
                }}
                className={classes.copyButton}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </CopyToClipboard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShortenedUrlItem;
