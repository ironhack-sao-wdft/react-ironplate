import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../routeComponents/Home';
import AuthRouter from '../routeComponents/auth/AuthRouter';
import Catalog from '../routeComponents/Catalog';

import { AuthContextComponent } from '../contexts/authContext';
import Cart from '../routeComponents/Cart';
import Checkout from '../routeComponents/Checkout';
import Navmenu from './Navmenu';
import CheckoutTest from '../routeComponents/Checkout2';

function App() {
	return (
		<BrowserRouter>
			<Navmenu />
			<AuthContextComponent>
				<div className='container mt-5'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/auth' component={AuthRouter} />
						<Route path='/cart' component={Cart} />
						<Route path='/checkout' component={CheckoutTest} />
						<Route path='/catalog' component={Catalog} />
					</Switch>
				</div>
			</AuthContextComponent>
		</BrowserRouter>
	);
}

export default App;
