import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Theme";
import Footer from "./components/layout/Footer";
import Homepage from "./components/layout/Homepage";
import ShortenerState from "./context/shortenerContext/ShortenerState";
import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Resources from "./components/pages/Resources";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <Fragment>
      <CssBaseline />
      <ShortenerState>
        <ThemeProvider theme={theme}>
          <Router>
            <Header value={value} setValue={setValue} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Homepage {...props} setValue={setValue} />}
              />
              <Route path="/features" component={Features} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/resources" component={Resources} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
            <Footer setValue={setValue} />
          </Router>
        </ThemeProvider>
      </ShortenerState>
    </Fragment>
  );
};

export default App;
