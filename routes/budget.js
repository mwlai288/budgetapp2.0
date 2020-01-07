const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
	try {
		const budget = await Budget.find({ user: req.user.id }).sort({ date: -1 });
		res.json(budget);
	} catch (error) {
		res.status(500).send('server error');
	}
});

router.post('/', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
	const { budget } = req.body;
	try {
		const newBudget = new Budget({
			budget,
			user: req.user.id
		});
		const addBudget = await newBudget.save();
		res.json(addBudget);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

router.put('/:id', auth, async (req, res) => {
	const { budget } = req.body;

	// Build contact object
	const expenseFields = {};
	if (budget) expenseFields.budget = budget;

	try {
		let existingBudget = await Budget.findById(req.params.id);

		if (!existingBudget) res.status(404).json({ msg: 'Expense not found' });

		// Make sure user owns contact
		if (existingBudget.user.toString() !== req.user.id)
			res.status(401).json({ msg: 'Not authorized' });

		existingBudget = await Budget.findByIdAndUpdate(
			req.params.id,
			{ $set: expenseFields },
			{ new: true }
		);

		res.json(existingBudget);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
