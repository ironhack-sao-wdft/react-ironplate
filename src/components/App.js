import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import { AuthContextComponent } from "../contexts/authContext";
import Navbar from "./Navbar";
import Post from "./Post";
import "../assets/styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/book/all" component={Post} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}
export default App;
