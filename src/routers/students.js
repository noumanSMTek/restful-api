const express = require('express');
const router = new express.Router()
const Student = require('../models/students');

// Create new student
router.post('/students', async(req, res) => {
    const student = new Student(req.body);
    try {
        const result = await student.save();
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

// read students

router.get('/students', async(req, res) => {
    try {
        const result = await Student.find();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).send(err)
    }
})
router.get('/students/:name', async(req, res) => {
    const name = req.params;
    try {
        const result = await Student.find(name);
        // if (result) return res.status(200).send('No data found')
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})



// Update students

router.patch('/students/:_id', async(req, res) => {
    try {
        const _id = req.params;
        const result = await Student.findByIdAndUpdate(_id, req.body, {
            new: true,
        });
        res.send(result)
    } catch (err) {
        res.status(400).send(err);
    }
});
// Delete students

router.delete('/students/:_id', async(req, res) => {
    try {
        const _id = req.params;
        const result = await Student.findByIdAndDelete(_id);
        if (!result) {
            return res.status(404).send('Stundet Not Found With That Id')
        }
        res.send(result)
    } catch (err) {
        res.status(500).send(err);
    }
});




module.exports = router;