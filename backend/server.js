const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const bodyParser=require('body-parser');
const app = express();
const port = 5000;

const dbName = 'registrationDB';
const collectionName = 'registrations';
const uri = "mongodb+srv://parthis1805:Parthiban1805@registeration.j2v4mdr.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=registeration";
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect().catch(error => {
  console.error('Error connecting to MongoDB:', error);
});
const database = client.db(dbName);
const collection = database.collection(collectionName);

app.post('/register', upload.single('paymentScreenshot'), async (req, res) => {
  console.log('Received request body:');
  console.log('Received file:');

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
});

app.get('/table', async (req, res) => {
    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const query = {

        };

        const results = await collection.find(query).toArray();
        console.log('Data fetched successfully:');

        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).send('Error fetching data');
    } finally {
        await client.close();
    }
});
app.post('/admin-login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Received login request for email:', email);

    try {
        await client.connect();
        const database = client.db("adminDB");
        const collection = database.collection("signup");

        console.log('Connected to database and querying for user with email:', email);
        const admin = await collection.findOne({ email });

        if (admin) {
            console.log('User found:');

            console.log('Stored hash:');

            const isMatch = await bcrypt.compare(password, admin.password);
            console.log('Password match result:');

            if (isMatch) {
                console.log('Password match, signin successful');
                res.status(200).json({ message: "Signin successful" });
            } else {
                console.log('Password mismatch');
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            console.log('User not found');
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).json({ error: 'Error fetching data' });
    } finally {
        await client.close();
    }
});
app.get('/',(req,res)=>{
  res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});