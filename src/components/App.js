import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import BookRouter from "../routeComponents/book/BookRouter";
import AuthRouter from "../routeComponents/auth/AuthRouter";

import NoMatch from "../components/404";
import InternalServerError from "../components/InternalServerError";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/book" component={BookRouter} />
          <Route path="/auth" component={AuthRouter} />

          {/* Error handling routes */}
          <Route
            path="/internal-server-error"
            component={InternalServerError}
          />
          <Route path="*" component={NoMatch} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
