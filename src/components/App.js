import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import Catalog from "../routeComponents/Catalog";

import { AuthContextComponent } from "../contexts/authContext";
import Navmenu from "./Navmenu";

function App() {
  return (
    <BrowserRouter>
      <Navmenu />
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
