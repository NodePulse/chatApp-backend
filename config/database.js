import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(process.env.MONGO_URI);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default connectDB;
