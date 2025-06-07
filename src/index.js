const express = require('express');

const app = express();
const PORT = 7777;

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
}
);
app.use('/test', (req, res) => {
    res.send('Hello From the Server!')
})

// app.get('/',express.request)