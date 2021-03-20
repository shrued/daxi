import React from "react";
import Header from "./header";
import Footer from "./footer";
import Chatbot from "./chatbot";
import { ChatbotContainer } from "./chatbot/chatbot";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <ChatbotContainer>
        <Chatbot />
      </ChatbotContainer>
      <Footer />
    </>
  );
}
