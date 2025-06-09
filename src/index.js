const express = require('express')
const db = require('./config/db_connection');

const app = express()

const PORT = 5000;

app.listen(PORT, () => {
    console.log('Server running successfully! on port ' + PORT)
})