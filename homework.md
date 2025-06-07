<!-- THIS HOMEWORK IS ASSIGNED ON 7TH JUNE 2025 (IN THIS DAY I GOT OFFER FROM KHELO TECH COMPANY AS A FED) -->

- Create a repository
- Initialize the repository
- Read about node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json What are dependencies
- What is the use of "-g" while npm install is
- Difference between caret and tilde ( ^ vs ~ )
 npm install -g express-generator  <!-- (to quickly create an application skeleton.) -->


 <!-- THE ORDER OF CODE ALWAYS MATTERS  FOR EXAMPLE -->
 app.use('/', (req, res) => {
    res.send('This is me!')
})
app.use('/test', (req, res) => {
    res.send('Hello From the Server!')
})

When we start the server than go to the "localhost:7777/test" path then it will print " This is me! ",  because the it match firstly the '/' if it start with the '/' then it return the 'This is me!'

app.use handle all the http methods.
So, you have to use app.get, app.post, app.delete, app.put etc request handlers
