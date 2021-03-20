import React from "react";
import { firestore } from "../../firebase/firebase";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      timestamp: Date.now(),
    };
  }

  updateQuestion = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  addQuestion = (e) => {
    e.preventDefault();
    const db = firestore;

    const userRef = db.collection("questions").add({
      question: this.state.question,
      timestamp: this.formatTime(this.state.timestamp),
    });
    this.setState({
      question: "",
    });
    alert("Your question has been submitted.");
  };

  render() {
    return (
      <form onSubmit={this.addQuestion}>
        <input
          type="text"
          name="question"
          placeholder=""
          value={this.state.question}
          onChange={this.updateQuestion}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
