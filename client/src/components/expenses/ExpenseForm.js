import React, { useState, useContext } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const ExpenseForm = () => {
	const [costs, setCosts] = useState({
		price: '',
		expense: ''
	});

	const { price, expense } = costs;

	const budgetContext = useContext(BudgetContext);

	const { addExpense } = budgetContext;

	const onChange = (e) => {
		setCosts({ ...costs, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addExpense(costs);
		setCosts({
			price: '',
			expense: ''
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2>Add Your Expense</h2>
			<input
				type="text"
				placeholder="What you buy?"
				name="expense"
				value={expense}
				onChange={onChange}
			/>
			<input
				type="text"
				name="price"
				value={price}
				placeholder="For how much?"
				onChange={onChange}
			/>
			<button type="submit">Submit Expense</button>
		</form>
	);
};

export default ExpenseForm;
