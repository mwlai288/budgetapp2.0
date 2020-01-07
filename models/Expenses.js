const mongoose = require('mongoose');

const Expenses = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	expense: {
		type: String,
		required: true
	},
	futureExpense: {
		type: String,
		required: false
	},
	price: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('expenses', Expenses);

// import this in User routes file
