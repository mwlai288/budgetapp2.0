import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import {} from '../types';

const BudgetState = (props) => {
	const initialState = {
		budget: 42000,
		costs: [
			{
				id: 1,
				expense: 'Night with Madison Ivy',
				price: 2040
			},
			{
				id: 2,
				expense: 'Drinks',
				price: 1000
			},
			{
				id: 3,
				expense: 'Vegas Hotel Room',
				price: 3000
			}
		]
	};

	const [state, dispatch] = useReducer(budgetReducer, initialState);

	// ACTIONS

	// Add Budget

	// Get Budget

	// Update Budget

	// Add Expense

	// Delete Expense

	// Update Expense

	return (
		// Provider lets us wrap application with context
		<BudgetContext.Provider
			value={{
				budget: state.budget,
				costs: state.costs
			}}
		>
			{props.children}
		</BudgetContext.Provider>
	);
};

export default BudgetState;
