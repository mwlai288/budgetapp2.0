import React, { useState, useContext, Fragment } from 'react';
import BudgetContext from '../context/budget/budgetContext';

const BudgetForm = () => {
	const [budget, setBudget] = useState(0);
	const budgetContext = useContext(BudgetContext);

	const onChange = (e) => setBudget(e.target.value);

	const submitBudget = async (e) => {
		e.preventDefault();

		try {
			if (budget === '' || budget < 0) {
				alert('Enter a positive balance');
			} else {
				budgetContext.addBudget(budget);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Fragment>
			<form onSubmit={submitBudget}>
				<h2>Enter Your Budget</h2>
				<input type="text" name="budget" onChange={onChange} />
				<button className="btn waves-effect waves-light green" type="submit">
					Submit Budget
				</button>
			</form>
			<h2>
				Current Budget: <span>$ {!budget ? 0 : budget}</span>
			</h2>
		</Fragment>
	);
};

export default BudgetForm;
