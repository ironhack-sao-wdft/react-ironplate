import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	Button,
	FormControl,
	Form,
} from 'react-bootstrap';
import './Navmenu.css';
import { AuthContext } from '../contexts/authContext';

function Navmenu() {
	const authContext = useContext(AuthContext);
	console.log(authContext);
	return (
		<div className='bg-color'>
			<Navbar className='d-flex justify-content-between container' expand='lg'>
				<Navbar.Brand href='/'>
					<img
						src={'/images/logoWrittenNoBg.png'}
						alt={'OddMarket Logo'}
						style={{ width: 200 }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/about-us'>
							<Nav.Link href='/about-us'>About us</Nav.Link>
						</Link>
						<Link to='/catalog'>
							<Nav.Link href='/catalog'>Catalog</Nav.Link>
						</Link>
					</Nav>
					{!authContext.user._id ? (
						<div>
							<Link to='/auth/login' className='link-text'>
								Login
							</Link>
							<Link to='/auth/signup' className='link-text'>
								Sign Up
							</Link>
						</div>
					) : (
						<div>
							<Link to='/auth/myprofile'>
								<Nav.Link path='/auth/myprofile'>My Profile</Nav.Link>
							</Link>
							<Link to='/auth/logout'>
								<Nav.Link path='/auth/logout'>Log Out</Nav.Link>
							</Link>
						</div>
					)}
					<Link to='/cart'>
						<i className='fas fa-shopping-cart'></i>
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Navmenu;
