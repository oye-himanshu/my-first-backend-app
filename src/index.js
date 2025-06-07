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

// app.use('/', (req, res) => {
//     res.send('This is me!')
// })
// app.use('/test', (req, res) => {
//     res.send('Hello From the Server!')
// })

app.get('/users', (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})

app.post('/users', (req, res) => {
    res.send('Data has been added successfully!')
})
app.delete('/users/:userId', (req, res) => {
    res.send('User delete successfully!')
})