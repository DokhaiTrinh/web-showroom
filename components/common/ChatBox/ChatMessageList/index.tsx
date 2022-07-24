import { ChatMessageModel } from "models/chatMessageModel";
import React from "react";
import ChatMessage from "./ChatMessage";

type Props = {
  messages: ChatMessageModel[];
};

function ChatMessageList({ messages }: Props) {
  return (
    <div>
      {messages.map((e) => (
        <ChatMessage message={e} key={e.id} />
      ))}
    </div>
  );
}

export default ChatMessageList;
