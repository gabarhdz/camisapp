const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gabarhdz:rQZC4BtAsicTmIH5@camisapp.dgxoqwb.mongodb.net/?retryWrites=true&w=majority&appName=camisapp';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error de conexión:', err);
  }
};

module.exports = connectDB;
