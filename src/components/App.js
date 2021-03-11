import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../routeComponents/Home';
import AuthRouter from '../routeComponents/auth/AuthRouter';
import Catalog from '../routeComponents/Catalog';

import { AuthContextComponent } from '../contexts/authContext';
import Cart from '../routeComponents/Cart';
import ProductDetails from '../routeComponents/ProductDetails';
import Navmenu from './Navmenu';
import NewProduct from '../routeComponents/NewProduct';
import { CartContextComponent } from '../contexts/cartContext';
import SucessPurchase from '../routeComponents/SucessPurchase';
import CanceledPurchase from '../routeComponents/CanceledPurchase';

function App() {
	return (
		<BrowserRouter>
			<AuthContextComponent>
				<CartContextComponent>
					<Navmenu />
					<Switch>
						<div className='container'>
							<Route exact path='/' component={Home} />
							<Route path='/auth' component={AuthRouter} />
							<Route path='/cart' component={Cart} />
							<Route path='/catalog' component={Catalog} />
							<Route path='/product/:id' component={ProductDetails} />
							<Route path='/newproduct' component={NewProduct} />
							<Route path='/order/success/:id' component={SucessPurchase} />
							<Route path='/order/canceled' component={CanceledPurchase} />
						</div>
					</Switch>
				</CartContextComponent>
			</AuthContextComponent>
		</BrowserRouter>
	);
}

export default App;
