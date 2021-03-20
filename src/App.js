import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";

import Layout from "./components/layout";
import Home from "./components/home";
import Browse from "./components/browse";
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
import PasswordReset from "./components/passwordReset";
import { UserContext } from "./providers/userProvider";

export default function App() {
  const user = useContext(UserContext);

  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.SIGN_IN}
            >
              <SignIn />
            </IsUserRedirect>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.SIGN_UP}
            >
              <SignUp />
            </IsUserRedirect>
            <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.PASSWORD_RESET}
            >
              <PasswordReset />
            </IsUserRedirect>

            <ProtectedRoute user={user} path={ROUTES.ABOUT}>
              <About />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.ARTICLES}>
              <Articles />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.HELP}>
              <Help />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.MOODBOARD}>
              <MoodBoard />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.MOODPATH}>
              <MoodPath />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.REFLECTION}>
              <Reflection />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.THERAPY}>
              <Therapy />
            </ProtectedRoute>
            <ProtectedRoute user={user} path={ROUTES.HOME} exact>
              <Home />
            </ProtectedRoute>
            {/* <IsUserRedirect
              user={user}
              loggedInPath={ROUTES.HOME}
              path={ROUTES.BROWSE}
              exact
            >
              <Browse />
            </IsUserRedirect> */}
            {/* <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/passwordReset" component={PasswordReset} />
            <Route path="/about" component={About} />
            <Route path="/articles" component={Articles} />
            <Route path="/help" component={Help} />
            <Route path="/moodboard" component={MoodBoard} />
            <Route path="/moodpath" component={MoodPath} />
            <Route path="/reflection" component={Reflection} />
            <Route path="/therapy" component={Therapy} />
            <Route component={PageNotFound} /> */}
          </Switch>
        </Router>
      </Layout>
    </>
  );
}
