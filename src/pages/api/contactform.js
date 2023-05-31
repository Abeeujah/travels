export default function contact(req, res) {
  const body = req.body;
  const { name, email, subject, phone, message } = body;
  console.log(name, email, subject, phone, message);
  return res.status(200).json({ message: "Success" });
}
