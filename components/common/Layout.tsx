import React, { ReactNode } from "react";
import ChatBox from "./ChatBox";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      <ChatBox />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
