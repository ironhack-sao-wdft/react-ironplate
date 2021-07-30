import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextComponent } from "../contexts/authContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/index.css";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";

// Paises components
import CountriesPage from "../routeComponents/countries/CountriesPage";

//Forum components
import CreatePostForum from "../routeComponents/forum/CreatePostForum";
import AllPosts from "../routeComponents/forum/AllPosts";
import DetailsPost from "../routeComponents/forum/DetailsPost";
import EditPost from "../routeComponents/forum/EditPost";

//Informações components
import Contents from "../routeComponents/informacoes/Contents";

// Moradia components
import AddHabitation from "../routeComponents/habitacao/AddHabitation";
import AllHabitation from "../routeComponents/habitacao/AllHabitation";
import DetailsHabitation from "../routeComponents/habitacao/DetailsHabitation";
import EditHabitation from "../routeComponents/habitacao/EditHabitation";

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

            <Route exact path="/:country" component={CountriesPage} />

            <Route exact path="/:country/forum" component={AllPosts} />
            <Route
              exact
              path="/:country/criar-forum"
              component={CreatePostForum}
            />
            <Route exact path="/:country/forum/:id" component={DetailsPost} />
            <Route exact path="/:country/edit-forum/:id" component={EditPost} />

            <Route exact path="/:country/conteudo" component={Contents} />

            <Route exact path="/:country/moradia" component={AllHabitation} />
            <Route
              exact
              path="/:country/adicionar-moradia"
              component={AddHabitation}
            />
            <Route
              exact
              path="/:country/moradia/:id"
              component={DetailsHabitation}
            />
            <Route
              exact
              path="/:country/editar-moradia/:id/"
              component={EditHabitation}
            />

            <Route
              exact
              path="/:country/criar-emprego"
              component={CreatePostJobs}
            />
            <Route exact path="/:country/emprego" component={AllJobs} />
          </div>
        </Switch>
      </AuthContextComponent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
