const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Ứng dụng Node.js đang chạy!', api: '/api' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Server đang chạy!' });
});

app.get('/api/get', (req, res) => {
  res.json({ message: 'This is a GET request!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server chạy trên port ${PORT}`);
});