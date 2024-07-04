const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose=require('mongoose');
const dotenv= require('dotenv')
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const test=require('./routes/routes')
const connectDB=require('./db/db')
const {Student}= require('./models/student_details')
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
app.use(cookieParser()); 
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false, 
    cookie: { secure: false }
}));

app.use('/',test)



app.listen(port, () => {
  if(connectDB())
    console.log(`Server listening on port ${port}`);
  else  
    console.log('Could not connect to database')
});
