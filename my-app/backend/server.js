const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing (install with `npm install bcrypt`)

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port
const test=require('./routes/routes')
const connectDB=require('./db/db')
// Enable CORS for cross-origin requests from React Native app
// const corsOptions = {
//     origin: 'http://localhost:3000', // Replace with your React Native app's origin
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: ['Content-Type', 'Authorization'],  
//     credentials: true,
//     optionsSuccessStatus: 204
// };
// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/',test)


app.listen(port, () => {
  if(connectDB())
    console.log(`Server listening on port ${port}`);
  else  
    console.log('Could not connect to database')
});
