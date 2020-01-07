import React, { useContext } from 'react';
import BudgetContext from '../../context/budget/budgetContext';

const ExpenseItem = ({ cost }) => {
	const budgetContext = useContext(BudgetContext);
	const { deleteExpense } = budgetContext;

	const { id } = cost;

	const onDelete = () => {
		deleteExpense(id);
	};

	const { price, expense } = cost;
	return (
		<div>
			<h3>
				Name of expense: {expense} Price: $ {price}
				<span>
					<i className="material-icons">edit</i>
					<i className="material-icons" onClick={onDelete}>
						delete
					</i>
				</span>
			</h3>
		</div>
	);
};

export default ExpenseItem;
