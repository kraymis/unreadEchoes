// backend/server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');


const app = express();

app.use(cors());

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', messageRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
