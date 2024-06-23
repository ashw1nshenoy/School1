const getFirst=(req,res)=>{
    return res.json({Message:'Hi'})
  }
  // Login endpoint (POST request)
const user= async (req, res) => {
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
  };



  module.exports={getFirst,user}