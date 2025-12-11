import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  const body = await req.json();
  const playlistUrl = body.playlist;

  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  const result = await client.messages.create({
    model: "claude-3-5-sonnet",
    max_tokens: 500,
    messages: [
      { role: "user", content: `Analitza aquesta playlist: ${playlistUrl}` }
    ]
  });

  return res.status(200).json({ result });
}
