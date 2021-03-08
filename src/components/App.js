import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

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
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
