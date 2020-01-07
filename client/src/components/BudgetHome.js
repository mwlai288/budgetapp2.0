import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import BudgetForm from './BudgetForm';
import Expenses from './expenses/Expenses';

const BudgetHome = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		//eslint-disable-next-line
	}, []);

	return (
		<div>
			<BudgetForm />
			<Expenses />
		</div>
	);
};

export default BudgetHome;
