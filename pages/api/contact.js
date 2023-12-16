export default function Handler(req, res) {
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
    console.log(newMessage);
    res
      .status(200)
      .json({ message: "Successfully stored message", newMessage });
  }
}
