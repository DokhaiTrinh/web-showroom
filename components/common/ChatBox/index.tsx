import React, { useState } from "react";
import styles from "./style.module.css";
import { RiMessage3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import ChatBoxHeader from "./Header";
import ChatBoxContent from "./Content";

function ChatBox() {
  const [showChatBox, setShowChatBox] = useState(false);

  const openChatBox = () => {
    setShowChatBox(true);
  };

  const closeChatBox = () => {
    setShowChatBox(false);
  };

  const chatBoxDisplay = () => {
    let display: string;
    if (showChatBox) {
      display = "block";
    } else {
      display = "none";
    }

    console.log(display);

    return display;
  };

  return (
    <div className={styles.container}>
      <div onClick={openChatBox} className={styles.chatIcon}>
        <RiMessage3Fill />
      </div>
      <div style={{ display: chatBoxDisplay() }} className={styles.chatbox}>
        <ChatBoxHeader onClose={closeChatBox} />
        <ChatBoxContent />
      </div>
    </div>
  );
}

export default ChatBox;
