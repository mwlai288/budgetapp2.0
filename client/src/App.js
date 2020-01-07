import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import AuthState from './context/auth/AuthState';
import BudgetHome from './components/BudgetHome';
import PrivateRoute from './components/PrivateRoute';
import BudgetState from './context/budget/BudgetState';

if (localStorage.token) setAuthToken(localStorage.token);
const App = () => {
	useEffect(() => {
		M.AutoInit();
	});
	return (
		<AuthState>
			<BudgetState>
				<Router>
					<Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<PrivateRoute exact path="/" component={BudgetHome} />
								<Route path="/login" component={Login} />
								<Route path="/register" component={Register} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</BudgetState>
		</AuthState>
	);
};

export default App;
