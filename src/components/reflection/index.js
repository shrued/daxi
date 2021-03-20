import React from "react";
import { firestore } from "../../firebase/firebase";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      timestamp: Date.now(),
      theQuestion: "",
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

  getQuestion = (e) => {
    e.preventDefault();

    let date = this.formatTime(this.state.timestamp);

    var d = new Date();
    var pastYear = d.getFullYear() - 1;
    d.setFullYear(pastYear);
    d = this.formatTime(d).substr(0, date.indexOf(" "));

    const db = firestore;

    db.collection("questions")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let items = doc.data();
          Object.keys(items).map((item, index) => {
            if (items[item].substr(0, date.indexOf(" ")) === d)
              this.setState({ theQuestion: items["question"] });
          });
        });
      });
  };

  render() {
    return (
      <>
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
        <div>
          <button onClick={this.getQuestion}>Last year's question</button>
          {this.state.theQuestion}
        </div>
      </>
    );
  }
}
export default User;
