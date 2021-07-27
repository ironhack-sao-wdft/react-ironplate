import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

import CreatePostForum from "../routeComponents/forum/CreatePostForum";
import AllPosts from "../routeComponents/forum/AllPosts";
import DetailsPost from "../routeComponents/forum/DetailsPost";

import { AuthContextComponent } from "../contexts/authContext";
import Footer from "./Footer";
import "../assets/styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/forum" component={AllPosts} />
          <Route path="/criar-forum" component={CreatePostForum} />
          <Route path="/forum/:id" component={DetailsPost} />
        </Switch>
        <Footer />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
