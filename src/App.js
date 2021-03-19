import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./components/home";
import About from "./components/about";
import Articles from "./components/articles";
import Help from "./components/help";
import MoodBoard from "./components/moodboard";
import MoodPath from "./components/moodpath";
import Reflection from "./components/reflection";
import Therapy from "./components/therapy";
import PageNotFound from "./components/404";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import { UserContext } from "./providers/userProvider";

export default function App() {
  const user = useContext(UserContext);

  return user ? (
    <Layout>
      <Home />
    </Layout>
  ) : (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/articles" component={Articles} />
            <Route path="/help" component={Help} />
            <Route path="/moodboard" component={MoodBoard} />
            <Route path="/moodpath" component={MoodPath} />
            <Route path="/reflection" component={Reflection} />
            <Route path="/therapy" component={Therapy} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}
