const express = require('express');
const connectDb = require('./config/db');

const app = express();

// connect database
connectDb()

// routes
app.get('/', (req, res) => { res.send('API is running'); });
// api routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));