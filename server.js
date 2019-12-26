const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.json({
		msg: 'Budget App 2.0'
	});
});

// Define Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/money', require('./routes/money'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server started on ${PORT}`));
