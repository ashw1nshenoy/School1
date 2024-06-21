const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing (install with `npm install bcrypt`)

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

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


// Replace with your actual user data (can be stored in a database)
const users = [
  { id: 1, email: 'user1@example.com', password: '1234' }, // Hashed password example
];

// Login endpoint (POST request)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  // Find user by email
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' }); // Unauthorized
  }

  // Compare password using bcrypt (replace with your actual password comparison logic)
  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Login successful (replace with your logic for generating tokens, sessions, etc.)
    res.json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Error comparing passwords:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
