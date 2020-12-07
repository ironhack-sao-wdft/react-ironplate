import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import BookRouter from "../routeComponents/book/BookRouter";

import NoMatch from "../components/404";
import InternalServerError from "../components/InternalServerError";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book" component={BookRouter} />

        {/* Error handling routes */}
        <Route path="/internal-server-error" component={InternalServerError} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
