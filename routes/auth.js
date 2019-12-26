const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('hello user');
});
router.post('/', (req, res) => {
	res.send('logged in user');
});

module.exports = router;
