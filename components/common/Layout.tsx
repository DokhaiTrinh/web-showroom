import React, { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar/index";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
