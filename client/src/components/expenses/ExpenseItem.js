import React from 'react';

const ExpenseItem = ({ cost }) => {
	const { price, expense } = cost;
	return (
		<div>
			<h3>
				Name of expense: {expense} Price: $ {price}
				<span>
					<i class="material-icons">edit</i>
					<i class="material-icons">delete</i>
				</span>
			</h3>
		</div>
	);
};

export default ExpenseItem;
