import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    console.log("Conectando");
    await connect(process.env.MONGO_URL as string);
    console.log("Conectado");
  } catch (error) {
    console.log("Erro na conexão com o MongoDB:", error);
  }
};

export { mongoConnect };
