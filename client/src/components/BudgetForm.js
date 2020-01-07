import React, { useState, Fragment } from 'react';
// import axios from 'axios';

const BudgetForm = () => {
	const [budget, setBudget] = useState(0);

	const onChange = (e) =>
		setBudget(...budget, ([e.target.name]: e.target.value));

	const submitBudget = async (e) => {
		e.preventDefault();

		try {
			if (budget === '' || budget < 0) {
				alert('Enter a positive balance');
			} else {
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Fragment>
			<form>
				<h2>Enter Your Budget</h2>
				<input type="number" name="budget" onChange={onChange} />
				<button onClick={submitBudget}>Submit Budget</button>
			</form>
			<h2>
				Current Budget: <span>$ {!budget ? 0 : budget}</span>
			</h2>
		</Fragment>
	);
};

export default BudgetForm;
