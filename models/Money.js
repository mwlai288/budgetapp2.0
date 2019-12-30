const mongoose = require('mongoose');

const MoneySchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	balance: {
		type: Number,
		required: false
	},
	expense: {
		type: String,
		required: false
	},
	futureExpense: {
		type: String,
		required: false
	},
	price: {
		type: Number,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('money', MoneySchema);

// import this in User routes file
