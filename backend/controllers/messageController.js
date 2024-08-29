const createMessageModel = require('../utils/createModel');
const mongoose = require('mongoose');


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

exports.getAllMessages = async (req, res) => {
  try {
    // Get the list of all collections in the database
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    // Initialize an array to store all messages
    const allMessages = [];

    // Loop through each collection
    for (let collection of collections) {
      const collectionName = collection.name;
      
      // Create a model for the collection
      const Message = createMessageModel(collectionName);
      
      // Fetch all messages from the collection
      const messages = await Message.find();
      
      // Add the messages to the allMessages array
      allMessages.push(...messages.map(msg => ({ collection: collectionName, ...msg._doc })));
    }

    // Send the combined messages as a response
    res.status(200).json(allMessages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
