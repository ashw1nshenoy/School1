const details = require("../models/student_details");
const bcrypt=require('bcryptjs')
const getFirst=(req,res)=>{
    return res.json({Message:'Hi'})
  }
  // Login endpoint (POST request)

const login=async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  if (!username || !password) {
      return res.status(400).json({ message: 'Please provide name and phone number' });
  }

  try {
      const student = await details.findOne({ username });
      console.log(username)

      if (!student) {
        console.log('Invalid')
          return res.status(401).json({ message: 'Invalid credentials' });

      }

      if(req.body.password== student.phoneNumber){
        console.log('Success')
        return res.status(200).json({message:'Success'})
      }
      // const isMatch = await bcrypt.compare(req.body.password, student.phoneNumber);
      console.log(student.phoneNumber)
      console.log(isMatch)

      if (!isMatch) {
          console.log('FAIL')
          return res.status(401).json({ message: 'Invalid credentials' });

      }

      // Generate JWT token on successful login
      // req.session.parentID = parent._id;
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}


  module.exports={getFirst,login}