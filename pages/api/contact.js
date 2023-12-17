import { MongoClient } from "mongodb";

export default async function Handler(req, res) {
  MongoClient;

  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !name ||
      !message ||
      !email.includes("@") ||
      name.trim().length === 0 ||
      message.trim().length === 0
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://cosovicnenad14:arsenal95@cluster0.0rzttmk.mongodb.net/blog-list?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Could not store messages into client collection" });
      return;
    }

    client.close();

    res
      .status(200)
      .json({ message: "Successfully stored message", message: newMessage });
  }
}
