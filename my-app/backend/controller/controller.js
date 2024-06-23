const student_details = require("../models/student_details");

const getFirst=(req,res)=>{
    return res.json({Message:'Hi'})
  }
  // Login endpoint (POST request)

const login=async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).json({ message: 'Please provide name and phone number' });
  }

  try {
      const student = await student_details.findOne({ username });

      if (!student) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(req.body.password, student.phoneNumber);

      if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token on successful login
      req.session.parentID = parent._id;

        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}


  module.exports={getFirst,login}