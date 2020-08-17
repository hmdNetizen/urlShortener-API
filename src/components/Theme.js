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
  },
  typography: {
    fontFamily: "Poppins",
    htmlFont: 18,
  },
  shadows: ["none"],
});

export default theme;
