import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import BookCreate from "../routeComponents/book/BookForm";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Route path="/book/create" component={BookCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
