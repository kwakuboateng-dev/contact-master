const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connnect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('👩🏽‍💻🚀 Database Connected: ', connnect.connection.host, connnect.connection.name);

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;