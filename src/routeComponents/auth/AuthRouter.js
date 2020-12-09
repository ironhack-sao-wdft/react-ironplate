import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";

function AuthRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <div className="container-fluid">
        <Switch>
          <Route path={`${props.match.path}/signup`} component={Signup} />
          <Route path={`${props.match.path}/login`} component={Login} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default AuthRouter;
