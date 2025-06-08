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

// MULTIPLE ROUTE HANDLING IS ALSO POSSIBLE
// in this case if the first request handler does not return res then we have to move to the 2nd handler by using next function 
// but if both have the res.send then it will throw an error coz we already sent the res to client in the first handler but still we send the another second res . At the end in multiple handler you have return only signle res

app.use('/users', (req, res, next) => {
    // Route Handler 
    // .use handle all the type of method for the route '/users'
    res.send('Route Handler 1')
    next()
}, (req, res) => {
    res.send('Router Handler 2')
})

// app.use(Router,rh1,rh2,rh3,...)  add as much as you can