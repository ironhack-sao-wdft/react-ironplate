import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import Catalog from "../routeComponents/Catalog";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
