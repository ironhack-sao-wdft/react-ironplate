import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from '../routeComponents/auth/Signup'
import Login from '../routeComponents/auth/Login'
import Profile from '../routeComponents/auth/Profile'
import Navbar from './Navbar'
import Home from '../routeComponents/Home'
import AuthRouter from '../routeComponents/auth/AuthRouter'
import About from './About'
import PrivateRoute from '../routeComponents/auth/PrivateRoute'
import PostFeed from '../components/PostFeed'
import Allusers from '../components/Allusers'
import '../assets/styles/index.css'
import CreatePost from './CreatePost'
import { AuthContextComponent } from '../contexts/authContext'
import SendingMessages from '../components/Sendingmessages'

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <div className="backgroundfix">
          <Navbar id />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path={'/signup'} component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/auth" component={AuthRouter} />
            <Route path="/post" component={PostFeed} />
            <Route path="/posting" component={CreatePost} />
            <Route path="/message" component={SendingMessages} />
            <Route path="/allusers" component={Allusers} />
          </Switch>
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  )
}

export default App
