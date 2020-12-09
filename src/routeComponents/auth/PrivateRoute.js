import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (authContext.loggedInUser.user._id) {
          return <Component {...routeProps} {...rest} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: { from: routeProps.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
