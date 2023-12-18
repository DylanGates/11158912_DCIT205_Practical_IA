const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
    .connect("mongodb://localhost/HospitalDB", {useNewURLParser: true})
    .then(() => {
        console.log("Connected to Database.");
    })