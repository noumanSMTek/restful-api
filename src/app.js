const express = require('express');
require('./db/connection')
const app = express();
const port = process.env.PORT || 8000;
const Student = require('./models/students');
app.use(express.json())
    // Create new student
app.post('/students', async(req, res) => {
    console.log(req.body);
    const student = new Student(req.body);
    try {
        const result = await student.save();
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

// read students

app.get('/students', async(req, res) => {
    try {
        const result = await Student.find();
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})
app.get('/students/:_id', async(req, res) => {
    const _id = req.params;
    try {
        const result = await Student.findById(_id);
        // if (result) return res.status(200).send('No data found')
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

app.listen(port, () => {
    console.log(`application running at ${port}`);
});