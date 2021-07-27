import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.scss"


import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

import { AuthContextComponent } from "../contexts/authContext";
import Signup from "../routeComponents/auth/Signup";
import NewPost from "../routeComponents/auth/NewPost";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
          <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/signup"component={Signup}/>
          <Route path="/new-post" component={NewPost} />
        </Switch>
        <Footer />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
