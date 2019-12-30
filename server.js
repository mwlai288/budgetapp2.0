const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

//Init Middleware(body-parser)
app.use(express.json({ extended: false }));

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
