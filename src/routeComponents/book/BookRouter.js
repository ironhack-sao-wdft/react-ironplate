import React from "react";
import { Route, Switch } from "react-router-dom";

import BookCreate from "./BookCreate";
import BookUpdate from "./BookUpdate";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import BookDelete from "./BookDelete";
import Navbar from "../../components/Navbar";

function BookRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path={`${props.match.path}/create`} component={BookCreate} />
          <Route path={`${props.match.path}/all`} component={BookList} />
          <Route
            exact
            path={`${props.match.path}/delete/:id`}
            component={BookDelete}
          />
          <Route
            exact
            path={`${props.match.path}/edit/:id`}
            component={BookUpdate}
          />
          <Route path={`${props.match.path}/:id`} component={BookDetail} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default BookRouter;
