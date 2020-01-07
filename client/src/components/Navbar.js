import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const Navbar = ({ title }) => {
	const authContext = useContext(AuthContext);
	const { isSignedIn, logout, user } = authContext;

	const onLogout = () => {
		logout();
	};

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name} </li>
			<li>
				<a href="#!" onClick={onLogout}>
					<span>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);

	return (
		<Fragment>
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">
						{title}
					</Link>
					<a href="#!" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						{isSignedIn ? authLinks : guestLinks}
					</ul>
					{/* <ul className="right hide-on-med-and-down">
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul> */}
				</div>
			</nav>

			<ul className="sidenav" id="mobile-demo">
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</Fragment>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

Navbar.defaultProps = {
	title: 'Budget App'
};

export default Navbar;
