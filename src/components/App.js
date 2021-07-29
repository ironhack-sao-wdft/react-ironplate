import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.scss";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../routeComponents/Home";
import Feed from "../routeComponents/Feed";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import ProtectedRoute from "../routeComponents/auth/PrivateRoute";

import { AuthContextComponent } from "../contexts/authContext";
import Signup from "../routeComponents/auth/Signup";
import NewPost from "../routeComponents/auth/NewPost";
import Profile from "../routeComponents/auth/Profile";
import EditProfile from "../routeComponents/auth/EditProfile";

import PostDetails from "../routeComponents/auth/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/profile/edit" component={EditProfile} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route exact path="/post/:id" component={PostDetails} />

          <ProtectedRoute path="/feed" component={Feed} />
          <ProtectedRoute path="/new-post" component={NewPost} />
        </Switch>
        <Footer />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
