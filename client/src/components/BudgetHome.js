import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';
import BudgetForm from './BudgetForm';
import Expenses from './expenses/Expenses';
import ExpenseForm from './expenses/ExpenseForm';

const BudgetHome = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		//eslint-disable-next-line
	}, []);

	return (
		<div>
			{/* <BudgetForm /> */}
			<ExpenseForm />
			<Expenses />
		</div>
	);
};

export default BudgetHome;
