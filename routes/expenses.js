const express = require('express');
const router = express.Router();
const Expenses = require('../models/Expenses');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
	try {
		const money = await Expenses.find({ user: req.user.id }).sort({ date: -1 });
		res.json(money);
	} catch (error) {
		res.status(500).send('server error');
	}
});

router.post('/', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
	const { expense, price, futureExpense } = req.body;
	try {
		const newExpense = new Expenses({
			expense,
			price,
			futureExpense,
			user: req.user.id
		});
		const addMoney = await newExpense.save();
		res.json(addMoney);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

router.put('/:id', auth, async (req, res) => {
	const { /*balance, */ expense, price, futureExpense } = req.body;

	// Build contact object
	const expenseFields = {};

	if (expense) expenseFields.expense = expense;
	if (price) expenseFields.price = price;
	if (futureExpense) expenseFields.futureExpense = futureExpense;

	try {
		let existingExpense = await Expenses.findById(req.params.id);

		if (!existingExpense) res.status(404).json({ msg: 'Expense not found' });

		// Make sure user owns contact
		if (existingExpense.user.toString() !== req.user.id)
			res.status(401).json({ msg: 'Not authorized' });

		existingExpense = await Expenses.findByIdAndUpdate(
			req.params.id,
			{ $set: expenseFields },
			{ new: true }
		);

		res.json(existingExpense);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		let existingExpense = await Expenses.findById(req.params.id);

		if (!existingExpense) res.status(404).json({ msg: 'Expense not found' });

		// Make sure user owns contact
		if (existingExpense.user.toString() !== req.user.id)
			res.status(401).json({ msg: 'Not authorized' });

		await Expenses.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Expense removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
