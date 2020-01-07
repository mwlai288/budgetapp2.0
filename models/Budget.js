const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	budget: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('budget', BudgetSchema);

// import this in User routes file
