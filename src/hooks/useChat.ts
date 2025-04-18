import { useChat as useAIChat } from "@ai-sdk/react";
import { useEffect, useRef, useState } from "react";

export type CHAT_STATE = "GET_STARTED" | "CHAT";
export default function useChat() {
  const [stage, setStage] = useState<CHAT_STATE>("GET_STARTED");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    error,
    stop,
    input,
    setInput,
    setData,
    setMessages,
    messages,
    handleInputChange,
    handleSubmit,
    status,
  } = useAIChat({
    onError: (error) => {
      console.log("Use Chat Error", error.message);
    },
  });

  const reset = () => {
    stop();
    setData([]);
    setInput("");
    setMessages([]);
  };

  const focusPrompt = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  //Scroll to end when new messages comes

  useEffect(() => {
    if (messages.length > 0) {
      setStage("CHAT");
      if (typeof window !== "undefined") {
        document.getElementById("bimboApp")?.scrollTo({ top: 10000000 });
      }
    } else {
      setStage("GET_STARTED");
    }
  }, [messages]);

  // Foucs on input when loading changes

  useEffect(() => {
    if (status === "ready" || status === "error") {
      focusPrompt();
    }
  }, [status]);

  return {
    messages,
    stage,
    handleInputChange,
    input,
    status,
    error,
    stop,
    handleSubmit,
    setInput,
    inputRef,
    reset,
  };
}
