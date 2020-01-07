import { ADD_BUDGET, ADD_EXPENSE, DELETE_EXPENSE } from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_BUDGET:
			return {
				...state,
				budget: [state.budget, action.payload]
			};
		case ADD_EXPENSE:
			return {
				...state,
				costs: [...state.costs, action.payload]
				// budget: state.budget - action.payload.price
			};
		case DELETE_EXPENSE:
			return {
				...state,
				costs: state.costs.filter((expense) => expense.id !== action.payload)
			};

		default:
			return state;
	}
};
