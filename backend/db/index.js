const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to databased!");
  } catch (error) {
    console.error(`Error in connecting with database`, error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
