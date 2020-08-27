import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  shortenedUrlContainer: {
    background: "#fff",
    borderRadius: 5,
    marginBottom: "1.5em",
    padding: "1em 2em",
  },
  copyButton: {
    ...theme.typography.btn,
    marginLeft: "1.5em",

    "&:hover": {
      background: theme.palette.secondary.light,
    },
  },
  originalUrl: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "40ch",
    color: theme.palette.common.violet,
  },
  shortUrl: {
    textDecoration: "none",
    color: theme.palette.common.cyan,
  },
}));

const ShortenedUrlItem = ({ link }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.shortenedUrlContainer}
    >
      <Grid item>
        <Typography variant="body2" className={classes.originalUrl}>
          {link.url}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item md>
            <a
              href={`https://rel.ink/${link.hashid}`}
              className={classes.shortUrl}
            >
              <Typography variant="body2">{`https://rel.ink/${link.hashid}`}</Typography>
            </a>
          </Grid>
          <Grid item md>
            <Button variant="contained" className={classes.copyButton}>
              Copy
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShortenedUrlItem;
