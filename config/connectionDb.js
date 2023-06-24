const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(
      `${connect.connection.name} database connected at ${connect.connection.host} on ${connect.connection.port}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
