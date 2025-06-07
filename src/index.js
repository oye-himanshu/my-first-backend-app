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

// ADVANCED ROUTING TECHNICS

//***** */ the '?' in front of b means b is option we can get the data with the route 'ac'  *****

app.get("/ab?c", (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})

//***** */ the '+' in front of b means we can unlimited b in the route like - abbbbbbbbbbbbbbbbc (but c must me at the end)  *****
app.get("/ab+c", (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})

//***** */ the * means you can add anything between the ab and cd like abHIMANSHUcd (but it most follow the pattern start with ab and end with cd)  *****
app.get("/ab*cd", (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})

// THIS BC IS OPTIONAL and similary for the * and +
app.get("/a(bc)?d", (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})

// THIS FOR THE REGES EXPRESSION 
app.get("/a/", (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})  // this means it will work for all route which contains a letter like - cab, aam, apple etc

app.get("/.fly$/", (req, res) => {
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})  // this means it will work for all the routes that contains fly at the end like - butterfly, dragonfly , fly etc

// THE above things are not used in real world it just for knowledge purpose 


// HOW TO GET THE QUERY 
app.get('/users', (req, res) => {
    console.log(req.query)  //  {email:'', password:''}
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})

// HOW TO GET THE ALL PARAMS ID 
app.get('/users/L:userId/:bookingId', (req, res) => {
    console.log(req.params) // return {userId:1,bookingId:34}
    res.send({ 'name': "Himanshu", 'last_name': "Sharma" })
})