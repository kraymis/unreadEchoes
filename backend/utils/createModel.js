// backend/utils/createModel.js
const mongoose = require('mongoose');

// Cache for models
const modelsCache = {};

const createMessageModel = (collectionName) => {
  if (modelsCache[collectionName]) {
    return modelsCache[collectionName];
  }

  const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    color: {
      name: { type: String, required: true },
      hex: { type: String, required: true }
    }
  });

  const Model = mongoose.model(collectionName, messageSchema, collectionName);
  modelsCache[collectionName] = Model;
  return Model;
};

module.exports = createMessageModel;
