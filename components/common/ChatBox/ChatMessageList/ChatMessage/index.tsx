import React, { CSSProperties } from "react";
import { ChatMessageModel, ChatType } from "models/chatMessageModel";
import styles from "./style.module.css";
import globalThemeConfig from "themes";

type Props = {
  message: ChatMessageModel;
};

function ChatMessage({ message }: Props) {
  const getContainerStyle = (): CSSProperties => {
    const isSender = message.type === ChatType.sender;

    const css: CSSProperties = {
      justifyContent: !isSender ? "flex-start" : "flex-end",
    };

    return css;
  };

  const getMessageStyle = (): CSSProperties => {
    const isSender = message.type === ChatType.sender;

    const senderCss: CSSProperties = {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 0,
      backgroundColor: globalThemeConfig.colors.primary,
    };

    const receiverCss: CSSProperties = {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      backgroundColor: "#e8ebe9",
      color: "black",
    };

    return isSender ? senderCss : receiverCss;
  };

  return (
    <div className={styles.container} style={getContainerStyle()}>
      <div style={getMessageStyle()} className={styles.message}>
        {message.message}
      </div>
    </div>
  );
}

export default ChatMessage;
