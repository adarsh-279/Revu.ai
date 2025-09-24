const { GoogleGenAI } = require("@google/genai");
const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
