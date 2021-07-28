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
          <div className="container-rotas">
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={AuthRouter} />
            <Route exact path="/forum" component={AllPosts} />
            <Route path="/criar-forum" component={CreatePostForum} />
            <Route path="/forum/:id" component={DetailsPost} />
          </div>
        </Switch>
      </AuthContextComponent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
