import React, { Fragment, useContext } from 'react';
import BudgetContext from '../../context/budget/budgetContext';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
	// Set up context to have access to any state or methods associated with the context
	const budgetContext = useContext(BudgetContext);

	const { costs } = budgetContext;
	return (
		<Fragment>
			{costs.map((cost) => (
				<ExpenseItem cost={cost} key={cost.id} />
			))}
		</Fragment>
	);
};

export default Expenses;
