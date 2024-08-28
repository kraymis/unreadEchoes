// backend/models/messageModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  color: {
    name: { type: String, required: true },
    hex: { type: String, required: true }
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
