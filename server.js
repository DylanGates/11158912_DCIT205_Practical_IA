const mongoose = require('mongoose');
const express = require('express');

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

    app.use(express);
    app.use('./api/Patient', patientsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});