const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://epoabarca:md0pN2wV7yzzayEp@abarquiri.llfxqyv.mongodb.net/test?retryWrites=true&w=majority&appName=abarquiri&authSource=admin';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error de conexión:', err);
  }
};

module.exports = connectDB;
