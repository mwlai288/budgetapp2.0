const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post(
	'/',
	[
		check('name', 'name is required')
			.not()
			.isEmpty(),
		check('email', 'please include valid email').isEmail(),
		check('password', 'enter password with 6 or more characters').isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
		const { email, name, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				res.status(400).json({ msg: 'User already exists' });
			}

			// Create new instance of user to save to DB
			user = new User({
				name,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
