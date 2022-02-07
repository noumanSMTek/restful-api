const express = require('express');
require('./db/connection')
const app = express();
const port = process.env.PORT || 8000;
const studentRuter = require('./routers/students')
app.use(express.json())
app.use(studentRuter);

app.listen(port, () => {
    console.log(`application running at ${port}`);
});