const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*", // allow to server to accept request from different origin
    })
);

app.get('/', (req, res) => {
    res.json( );
});

app.listen(8000);

module.exports = app;