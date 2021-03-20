import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, path, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          if (
            path === "/about"
            // && user
          )
            return children;
          else if (
            path === "/articles"
            // && user
          )
            return children;
          else if (
            path === "/help"
            // && user
          )
            return children;
          else if (
            path === "/moodboard"
            // && user
          )
            return children;
          else if (
            path === "/moodpath"
            // && user
          )
            return children;
          else if (
            path === "/reflection"
            // && user
          )
            return children;
          else if (
            path === "/therapy"
            // && user
          )
            return children;
          else {
            return (
              <Redirect
                to={{
                  pathname: "signin",
                  state: { from: location },
                }}
              />
            );
          }
        }

        return null;
      }}
    />
  );
}
