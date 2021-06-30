"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Good!' });
});
app.listen(port, () => {
    console.log(`Server start on: localhost:${port}`);
});
