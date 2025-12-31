
const express = require('express');
const app = express();
const dotenv = require('dotenv');  // iport dotenv package
dotenv.config();                  // connection to the dotenv file
const connectToDatabase = require('./config/db');
const userRoutes = require('./routes/userroutes'); // import user routes

// Connect to the database
connectToDatabase();

app.use(express.json());  // Middleware to parse JSON request bodies

const PORT = process.env.Port || 3000;   // getting port from the dotenv file

app.get('/', (req, res) => {
    res.send('Hello from the Backend!');
});
app.get('/charan',(req,res)=>{
    res.send('Hello Charan hi  ');
});
app.use('/api/users', userRoutes); // Use user routes

const name=process.env.Name;  // getting Name from the dotenv file
app.get('/name',(req,res)=>{
    res.send(`Hello ${name} welcome to the backend`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


