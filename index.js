const express = require('express');
const cors = require('cors');
const myRouter = require('./routes/data');

const PORT = process.env.PORT || 9000;
const HOST = 'localhost';

const app = express();

// connecting backend with frontend
app.use(cors());

app.use('/api',myRouter);

app.listen(PORT,HOST, () => {
    console.log("Server running at http://localhost:9000");
});
