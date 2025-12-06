import mongoose from "mongoose";

async function Connection() {
  try {
    const dataBase = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mogno DB connection Success ${dataBase.connection.host}`);
  } catch (error) {
    console.log(`Mongo DB connection error ${error}`);
  }
}

export default Connection;
