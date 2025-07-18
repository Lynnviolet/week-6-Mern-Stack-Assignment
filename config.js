// server/config/testDB.js
const mongoose = require('mongoose');

const connectTestDB = async () => {
  try {
    await mongoose.connect(process.env.TEST_DB_URI || 'mongodb://127.0.0.1:27017/mern_test_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to test MongoDB');
  } catch (error) {
    console.error('❌ Test DB connection error:', error);
    process.exit(1);
  }
};

const disconnectTestDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

module.exports = { connectTestDB, disconnectTestDB };
