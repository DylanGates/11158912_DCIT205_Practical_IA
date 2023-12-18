const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
    .connect("mongodb://localhost/HospitalDB", {useNewURLParser: true})
    .then(() => {
        console.log("Connected to Database.");
    });
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});