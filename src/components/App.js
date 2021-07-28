import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextComponent } from "../contexts/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";

import Header from "./Header";
import Footer from "./Footer";

import "../assets/styles/index.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

//Forum components
import CreatePostForum from "../routeComponents/forum/CreatePostForum";
import AllPosts from "../routeComponents/forum/AllPosts";
import DetailsPost from "../routeComponents/forum/DetailsPost";
import EditPost from "../routeComponents/forum/EditPost";

//Informações components
import Contents from "../routeComponents/informacoes/Contents";

// Moradia components
import CreatePostMoradia from "../routeComponents/habitacao/CriarPostMoradia";
import AllMoradias from "../routeComponents/habitacao/TodasMoradias";

// Emprego components
import CreatePostJobs from "../routeComponents/jobs/CreatePostJobs";
import AllJobs from "../routeComponents/jobs/AllJobs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AuthContextComponent>
        <Switch>
          <div className="container-rotas">
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/forum" component={AllPosts} />
            <Route path="/criar-forum" component={CreatePostForum} />
            <Route path="/forum/:id" component={DetailsPost} />
            <Route exact path="/edit-forum/:id" component={EditPost} />
            <Route path="/conteudo/:country" component={Contents} />

            <Route path="/criar-moradia" component={CreatePostMoradia} />
            <Route path="/moradia" component={AllMoradias} />
            <Route path="/criar-emprego" component={CreatePostJobs} />
            <Route path="/emprego" component={AllJobs} />
          </div>
        </Switch>
      </AuthContextComponent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
