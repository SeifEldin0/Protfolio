export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing access key" }),
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
