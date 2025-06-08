const express = require('express')

const app = express();
const PORT = 7777;

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
}
);

// ERROR HANDLING WHAT WHEN WE WRITE THE DB CODE AND AN ERROR OCCURRED. SO, WE USE TRY CATCH METHOD
app.get('/getUserData', (req, res) => {
    try {
        res.send('Data sent successfully!')
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }

})