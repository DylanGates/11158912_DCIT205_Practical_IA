const express = require('express');

const Patient = require('./api/Patient'); 

const app = express();




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


app.post('/api/patients/:id/encounter', (req, res) => {
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

    res.status(500).json({ error: 'Error has occured'});
    });
});


app.get('/api/patients', (req, res) => {
    Patient.find()
    .then((patients) => {
        res.json(patients);
    })
    .catch((err) => {
        res.status(500).json(err);
    });

});

app.get('/api/patients/:id', (req, res) => {
    const patientID = req.params.id;

    Patient.findById(patientID)
    .then((patient) => {
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found'});
        }
        res.join(patient);
    })
    .catch((error) => {
        res.status(500).json(error);
    });
});
