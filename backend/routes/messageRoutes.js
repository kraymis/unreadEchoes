const express = require('express');
const router = express.Router();
const { createMessage, getMessages } = require('../controllers/messageController');

// Create a new message
router.post('messages/:collectionName', createMessage);

// Get all messages
router.get('messages/:collectionName', getMessages);

module.exports = router;
