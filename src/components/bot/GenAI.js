import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: "AIzaSyCybUYNUIeRt0VbZx3UNS9KXfCdxgpPJR8" });

async function GenAI(input, messages) {
  const chat = genAI.chats.create({
    model: "gemini-2.0-flash",
    history: [...messages],
    config: {
      systemInstruction: `
      You are a helpful assistant and your name is Maya. Only generate text-based responses. Do not generate code, images, videos, or any other non-text content.
          `,
      maxOutputTokens: 1000,
      temperature: 0.7,
    },
  });
  const streamText = await chat.sendMessageStream({
    message: input,
  });
  return streamText;
}

export default GenAI;
