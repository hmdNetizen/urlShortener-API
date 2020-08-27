import { createMuiTheme } from "@material-ui/core/styles";

const darkViolet = "hsl(257, 27%, 26%)";
const cyan = "hsl(180, 66%, 49%)";
const red = "hsl(0, 87%, 67%)";
const gray = "hsl(0, 0%, 75%)";
const grayishViolet = "hsl(257, 7%, 63%)";
const darkBlue = "hsl(255, 11%, 22%)";
const vDarkViolet = "hsl(260, 8%, 14%)";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: darkViolet,
    },
    secondary: {
      main: cyan,
    },
    common: {
      violet: darkViolet,
      cyan: cyan,
      gray: gray,
      red: red,
      gViolet: grayishViolet,
      blue: darkBlue,
      darkViolet: vDarkViolet,
    },
    error: {
      main: red,
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins",
    htmlFont: 18,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.2rem",
    },
    body1: {
      fontSize: "1rem",
    },

    btn: {
      minWidth: 100,
      textTransform: "none",
      background: cyan,
      color: "#fff",
      fontWeight: 500,
      maxHeight: 40,
    },
  },
  shadows: ["none"],
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          color: red,
        },
        color: "#000", // if you also want to change the color of the input, this is the prop you'd use
      },
    },
  },
});

export default theme;
