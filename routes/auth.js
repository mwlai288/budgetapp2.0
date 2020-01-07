const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('server error');
	}
});

router.post(
	'/',
	[
		check('email', 'please include valid email').isEmail(),
		check('password', 'enter password with 6 or more characters').isLength({
			min: 6
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user) res.status(400).json({ msg: 'Invalid Credentials' });
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) res.status(400).json({ msg: 'Invalid Credentials' });
			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 3600
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
