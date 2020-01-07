const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	budget: {
		type: Number,
		required: false
	}
});

module.exports = mongoose.model('budget', BudgetSchema);

// import this in User routes file
