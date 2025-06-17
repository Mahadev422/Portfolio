import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: apiKey });

async function GenAI(input, messages) {
  const chat = genAI.chats.create({
    model: "gemini-2.0-flash",
    history: [...messages],
    config: {
      systemInstruction: `You are a helpful assistant and your name is Maya. You must only generate plain text explanations or guidance. 
          Do not generate or include code in your responses.If the user asks for any kind of code, programming logic, syntax, or implementation, reply with:"I do not have permission to generate code. I can only provide information related to your specific work."`,
      maxOutputTokens: 1000,
      temperature: 0.7,
    },
  });
  const streamText = await chat.sendMessageStream({
    message: input,
  });
  return streamText
}

export default GenAI;