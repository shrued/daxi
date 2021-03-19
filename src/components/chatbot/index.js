import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class Chatbot extends Component {
  state = {
    opened: false,
  };

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  };

  render() {
    const { opened } = this.state;
    const steps = [
      {
        id: "1",
        message: "Hi, I'm Daxi. What's your name?",
        trigger: "2",
      },
      {
        id: "2",
        user: true,
        trigger: "3",
      },
      {
        id: "3",
        message: "Hi {previousValue}, nice to meet you!",
        end: true,
      },
    ];

    return (
      <ChatBot
        steps={steps}
        floating={true}
        opened={opened}
        recognitionEnable={true}
        toggleFloating={this.toggleFloating}
      />
    );
  }
}

export default Chatbot;
