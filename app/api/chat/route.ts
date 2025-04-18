import { streamText } from "ai";
import { createOllama } from "ollama-ai-provider";

const aiChat = async (request: Request) => {
  const { messages } = await request.json();

  const ollama = createOllama({});

  const result = streamText({
    model: ollama("llama3"),
    messages,
  });

  return result.toDataStreamResponse();
};

export const POST = aiChat;
