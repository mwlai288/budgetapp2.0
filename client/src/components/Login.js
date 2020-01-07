import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';

const Login = (props) => {
	// hooks
	const [user, setUser] = useState({
		email: '',
		password: ''
	});
	const authContext = useContext(AuthContext);

	const { email, password } = user;
	const { login, isSignedIn } = authContext;

	useEffect(() => {
		if (isSignedIn) {
			props.history.push('/');
		}
		// eslint-disable-next-line
	}, [isSignedIn, props.history]);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			console.log('enter all fields');
		} else {
			login({ email, password });
		}
	};

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	return (
		<div className="">
			<h1>Account Login</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						id="email"
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<input type="submit" value="Login" className="" />
			</form>
		</div>
	);
};

export default Login;
