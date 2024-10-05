const express = require('express');
const mainApp = express();
const server = mainApp.get('/', function RH(req, res) {
    console.log("Holla");
    return res;
});

