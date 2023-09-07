import mongoose from "mongoose";

const connection = mongoose.connection;

async function connect() {
  const MONGOOSE_URI = process.env.MONGOOSE_URI;
  if (!MONGOOSE_URI) throw new Error("No mongoose uri");

  connection.once("open", () => {
    console.log("Connection with mongo OK");
  });

  connection.on("disconnected", () => {
    console.log("Disconnected successfull");
  });

  connection.on("error", (error) => {
    console.log("Something went wrong!", error);
  });
    if (!global._mongoClientPromise) {
      console.log("New connection...");
      global._mongoClientPromise = await mongoose.connect(MONGOOSE_URI);
    }
//   console.log("New connection...");
//   await mongoose.connect(MONGOOSE_URI);
}

export default connect;
