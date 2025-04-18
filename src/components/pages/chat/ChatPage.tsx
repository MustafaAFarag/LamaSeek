"use client";

import styled from "styled-components";
import Row from "../../common/Row";
import GetStarted from "./GetStarted";
import { Colors } from "@/src/statics/colors";
import useChat from "@/src/hooks/useChat";
import ChatInput from "../../common/input/ChatInput";
import ChatHolder from "../../common/chat/ChatHolder";
import NewChatBtn from "../../common/chat/NewChatBtn";

const ChatPageEl = styled(Row)`
  position: relative;
  width: 100svw;
  min-height: 100svh;
  color: ${Colors.White};
  height: fit-content;
`;

export default function ChatPage() {
  const {
    setInput,
    stage,
    status,
    input,
    handleInputChange,
    handleSubmit,
    inputRef,
    messages,
    reset,
  } = useChat();

  const canSend =
    (status === "ready" || status === "error") &&
    typeof input === "string" &&
    input.length > 0;

  return (
    <ChatPageEl>
      {stage === "CHAT" && <NewChatBtn onClick={reset}>New Chat</NewChatBtn>}
      <ChatHolder messages={messages} />
      <GetStarted active={stage === "GET_STARTED"} setPrompt={setInput} />
      <ChatInput
        canSend={canSend}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={status === "submitted" || status === "streaming"}
        prompt={input}
        messageCount={messages.length}
        inputRef={inputRef}
      />
    </ChatPageEl>
  );
}
