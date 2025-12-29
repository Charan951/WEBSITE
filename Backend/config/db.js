const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.Mongodb_url); // getting Mongodb_url from the dotenv file
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDatabase;