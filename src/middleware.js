const express = require('express')
const { adminAuth, userAuth } = require('./middleware/auth')

const app = express();
const PORT = 7777;

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    else
        console.log("Error occurred, server can't start", error);
}
);


// THIS IS FOR THE PARTICUALR CHECKING AUTHORIZATION BUT WHAT IF WE HAVE TO CHECK FOR ALL THE ADMIN ROUTES FOR ADMIN 
// So, IN THIS CASE THE MIDDLEWARE COMES INTO THE PICTURE 
app.get('/admin/user', (req, res) => {
    const token = req.body?.token;
    if (token) {
        res.send('Data retrived successfully!')
    } else {
        res.status(401).send('Unauthorised!')
    }
})

// so for overcome the above problem we use middleware 
app.use('/admin', (req, res, next) => {
    const token = req.body?.token;
    if (!token) {
        res.status(401).send('Unauthorised!')
    } else {
        next()
    }
})
// now it will restrict all the routes related to the /admin like /admin/user, /admin/subscriptions and for all the http methods
// it will only work for the routes which are start with the /admin 

// WE CAN ALSO CREATE A SEPRATE FOLDE FOR THE MIDDLEWARE

app.use('/admin', adminAuth)
app.use('/user', userAuth)
// similaryly for everyone 

// but in such case we dont want to restirct the login api but we applied middleware for every route which started with the /user 

// so for this just put the login request before the code where middlware applied like this, as we know the in express order of code always matters then in case when the user calls login api then this api called without any restirction
app.post('/user/login', (req, res) => {
    res.send('user logged in!')
})

app.use('/user', userAuth)
