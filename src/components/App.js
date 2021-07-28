import react from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextComponent } from "../contexts/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import CreatePostForum from "../routeComponents/forum/CreatePostForum";
import AllPosts from "../routeComponents/forum/AllPosts";
import Habitation from "./Habitation";
import AddHabitation from "./AddHabitation";


{/*import DetailsPost from "../routeComponents/forum/DetailsPost";*/}
{/*import CreatePostMoradia from "../routeComponents/habitation/CreatePostMoradia";*/}
{/*import CreatePostJobs from "../routeComponents/jobs/CreatePostJobs";*/}
{/*import AllJobs from "../routeComponents/jobs/AllJobs";*/}



function App() {
  return (
    <BrowserRouter>
    <Header/>
      <AuthContextComponent>
        <Switch>
          <div className="container-rotas">
            <Route exact path="/" component={Home} />
            <Route path="/habitation" component={Habitation} />
            <Route path="/addhabitation" component={AddHabitation} />

            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/forum" component={AllPosts} />
            <Route path="/criar-forum" component={CreatePostForum} />
            {/*<Route path="/criar-moradia" component={CreatePostMoradia} />*/}
            {/*<Route path="/moradia" component={AllMoradias} />*/}
            {/*<Route path="/criar-emprego" component={CreatePostJobs} />
            <Route path="/emprego" component={AllJobs} />*/}

          </div>
        </Switch>
      </AuthContextComponent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
