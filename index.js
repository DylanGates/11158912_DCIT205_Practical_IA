const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./Patient'); 

const app = express();

mongoose
    .connect("mongodb://localhost/27017", {useNewURLParser: true})
    .then(() => {
        try {
            console.log("Connected to Database.");
        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err);
    });


app.post('/Patient', (req, res) => {
    const {name, age} = req.body;

    const newPatient = new Patient({ name, age });
    newPatient.save()
    .then((patient) => {
        res.status(201).json(patient);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

app.post('/Patient/:id/encounter', (req, res) => {
    const patientID = req.params.id;
    const { vitals } = req.body;

    Patient.findByIDandUpdate(patientID, { vitals }, { new: true })
    .then((patient) => {
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found'});
        }
        res.json(patient);
    })
    .catch((error) => {
        res.status(500).json(error);

    res.status(500).json({ error: 'Error has occured'})
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});