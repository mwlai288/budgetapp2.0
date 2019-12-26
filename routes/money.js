const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('get all expenses');
});
router.post('/', (req, res) => {
	res.send('add expense');
});
router.put('/:id', (req, res) => {
	res.send('edit expense');
});
router.delete('/:id', (req, res) => {
	res.send('edit expense');
});

module.exports = router;
