import React from "react";
import ActionBar from "../ActionBar";
import styles from "./style.module.css";
import data from "__mocks__/chatMessages.json";
import ChatMessageList from "../ChatMessageList";
import { ChatMessageModel } from "models/chatMessageModel";

function ChatBoxContent() {
  const getMessages = (): ChatMessageModel[] => {
    const list = data["messages"];
    return list.map((e) => ChatMessageModel.fromJson(e));
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <ChatMessageList messages={getMessages()} />
      </div>
      <div className={styles.bar}>
        <ActionBar />
      </div>
    </div>
  );
}

export default ChatBoxContent;
