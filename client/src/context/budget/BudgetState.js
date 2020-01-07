import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import { ADD_BUDGET, ADD_EXPENSE, DELETE_EXPENSE } from '../types';

const BudgetState = (props) => {
	const initialState = {
		budget: 3000000000,
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
	const addBudget = (budget) => {
		dispatch({
			type: ADD_BUDGET,
			payload: budget
		});
	};

	// Get Budget

	// Update Budget

	// Add Expense
	const addExpense = (costs) => {
		costs.id = 4;
		dispatch({ type: ADD_EXPENSE, payload: costs });
	};

	// Delete Expense
	const deleteExpense = (id) => {
		dispatch({
			type: DELETE_EXPENSE,
			payload: id
		});
	};

	// Update Expense

	return (
		// Provider lets us wrap application with context
		<BudgetContext.Provider
			value={{
				budget: state.budget,
				costs: state.costs,
				addBudget,
				addExpense,
				deleteExpense
			}}
		>
			{props.children}
		</BudgetContext.Provider>
	);
};

export default BudgetState;
