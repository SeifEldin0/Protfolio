// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, message } = req.body;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, message: data.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
