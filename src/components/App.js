import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import Catalog from "../routeComponents/Catalog";

import { AuthContextComponent } from "../contexts/authContext";
import Cart from "../routeComponents/Cart";

import ProductDetails from "../routeComponents/ProductDetails";
import Navmenu from "./Navmenu";

function App() {
  return (
    <BrowserRouter>
      <Navmenu />
      <AuthContextComponent>
        <Switch>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={AuthRouter} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/catalog" component={Catalog} />
          </div>
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
