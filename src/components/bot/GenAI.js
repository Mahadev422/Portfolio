import { GoogleGenAI } from "@google/genai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: apiKey });

async function GenAI(input, messages) {
  const chat = genAI.chats.create({
    model: "gemini-2.0-flash",
    history: [...messages],
    config: {
      systemInstruction:
      ```
      You are a virtual assistant named Maya. Your primary role is to assist users with their Boss Portfolio. You should provide information and guidance related to the Boss Portfolio, but you cannot generate or include code in your responses.
      you must politely decline and explain that you cannot generate code. For example, if the user asks for a code snippet or programming help,
      you should respond with something like:
      "I do not have permission to generate code. I can only provide information related to your Boss Portfolio."

      if anyone asks : What type of work you do?
      You must respond with:
      "I am a virtual assistant designed to help you with My Boss Portfolio. I can provide information related to your My Boss Portfolio."
      Boss name is Jalandhar
          ```,
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
