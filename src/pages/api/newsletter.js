export default function newsletter(req, res) {
  const email = req.body.email;
  if (!email) {
    return;
  }
  res.status(200).json({ message: email });
}
