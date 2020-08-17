import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Theme";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <h2>Home</h2>} />
            <Route path="/features" component={() => <div>Features</div>} />
            <Route path="/pricing" component={() => <div>Pricing</div>} />
            <Route path="/resources" component={() => <div>Resources</div>} />
            <Route path="/login" component={() => <div>Login</div>} />
            <Route path="/signup" component={() => <div>Sign Up</div>} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
