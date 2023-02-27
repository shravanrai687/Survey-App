const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Database connection attempt...');
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch(err) {
    console.error(err);
    console.log("Retry connection in 10 seconds");
    setTimeout(connectDB, 10000);
  }
}

module.exports = connectDB;