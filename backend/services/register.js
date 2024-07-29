async function register (req,res){
    console.log('Received request body:', req.body);
    console.log('Received file:', req.file);
  
    const registrationData = {
      name: req.body.name,
      gender: req.body.gender,
      dob: req.body.dob,
      email: req.body.email,
      phone: req.body.phone,
      regNo: req.body.regNo,
      course: req.body.course,
      program: req.body.program,
      blood: req.body.bloodGroup,
      hORd: req.body.hORd,
      hostelID: req.body.hostelID,
      paymentScreenshot: req.file ? req.file.path : null,
    };
  
    try {
      const result = await collection.insertOne(registrationData);
      console.log('Registration data stored in MongoDB:', result.insertedId);
  
      res.status(200).send('Registration successful!');
    } catch (error) {
      console.error('Error storing data in MongoDB:', error);
      res.status(500).send('Error storing data');
    }
}

// register();

module.exports={
    register
}