const createMessageModel = require('../utils/createModel');

// Create a new message
exports.createMessage = async (req, res) => {
  const collectionName = req.params.collectionName;
  const Message = createMessageModel(collectionName);

  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all messages
exports.getMessages = async (req, res) => {
  const collectionName = req.params.collectionName;
  const Message = createMessageModel(collectionName);

  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
