import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import Home from '../routeComponents/Home'
import AuthRouter from '../routeComponents/auth/AuthRouter'
import About from './About'
import PrivateRoute from '../routeComponents/auth/PrivateRoute'
import PostFeed from '../components/PostFeed'
import Allusers from '../components/Allusers'
import '../assets/styles/index.css'

import { AuthContextComponent } from '../contexts/authContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <div className="backgroundfix">
          <Navbar id />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/auth" component={AuthRouter} />
            <Route path="/post" component={PostFeed} />
            <Route path="/allusers" component={Allusers} />
          </Switch>
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  )
}

export default App
