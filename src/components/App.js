import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

import CreatePostForum from "../routeComponents/forum/CreatePostForum";
import AllPosts from "../routeComponents/forum/AllPosts";

import CreatePostMoradia from "../routeComponents/habitation/CreatePostMoradia";
import AllMoradias from "../routeComponents/habitation/AllMoradias";

import CreatePostJobs from "../routeComponents/jobs/CreatePostJobs";
import AllJobs from "../routeComponents/jobs/AllJobs";

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
            <Route path="/auth" component={AuthRouter} />
            <Route path="/forum" component={AllPosts} />
            <Route path="/criar-forum" component={CreatePostForum} />
            <Route path="/criar-moradia" component={CreatePostMoradia} />
            <Route path="/moradia" component={AllMoradias} />
            <Route path="/criar-emprego" component={CreatePostJobs} />
            <Route path="/emprego" component={AllJobs} />
          </div>
        </Switch>
        <Footer />
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
