import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors()); // Allows React (port 5173/5174) to call this server
app.use(express.json()); // Parses incoming JSON bodies

// 1. MySQL Connection Pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'VRD',       // Your local MySQL username (default: 'root')
  password: 'student',       // Your local MySQL password (leave blank in XAMPP)
  database: 'rr_patil_coaching',
  waitForConnections: true,
  connectionLimit: 10,
});

// 2. POST API Endpoint to save demo booking
app.post('/api/demo', (req, res) => {
  const { name, phone, grade, course, customMessage } = req.body;

  // Basic validation
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  // Parameterized SQL query to prevent SQL Injection
  const sql = `
    INSERT INTO demo_bookings 
    (student_name, phone_number, grade, target_course, custom_message) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, phone, grade, course, customMessage || ''], (err, result) => {
    if (err) {
      console.error('MySQL Insert Error:', err.message);
      return res.status(500).json({
        error: 'Database failed to save booking.',
        details: err.message,
        code: err.code,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Demo class registered successfully!',
      bookingId: result.insertId,
    });
  });
});

// 3. Start Server on port 5000
app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
