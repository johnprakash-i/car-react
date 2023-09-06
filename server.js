// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

// Create an Express app
const app = express();
const port = 3001;

// Enable CORS and JSON parsing
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'carservice', // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API endpoint to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, mobileService, message, phoneNumber } = req.body;

  const sql =
    'INSERT INTO customer_information (name, email, mobileService, message, phoneNumber) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, mobileService, message, phoneNumber], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'An error occurred while inserting data.' });
      return;
    }
    console.log('Data inserted:', result);
    res.status(200).json({ message: 'Data inserted successfully.' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
