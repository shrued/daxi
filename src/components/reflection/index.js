import React from "react";
import { firestore } from "../../firebase/firebase";
import {
  Container,
  FormButton,
  FormContainer,
  FormInput,
  LastYear,
  Text,
  GetButton,
  SubContainer,
  Quote,
  BigText,
  MediumText,
} from "./reflection";
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

    if (this.state.question) {
      const userRef = db.collection("questions").add({
        question: this.state.question,
        timestamp: this.formatTime(this.state.timestamp),
      });
      this.setState({
        question: "",
      });
      alert("Your question has been submitted.");
    } else {
      alert(
        "Cannot submit an empty field. Please type something before submitting."
      );
    }
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
      <Container>
        <SubContainer>
          <BigText>What is the Reflection feature?</BigText>
          <Text>
            Getting caught up in the busyness of daily life can make it
            challenging to turn inward and reflect on our thoughts and feelings.
            But introspection — or self-reflection — can spark insight, which
            can alter the way we see ourselves and those around us. <br />
            This feature will help you with exactly that. <br />
            You get to type a question everyday. Then, one year late, you wil be
            asked the same question. <br />
            If you were shown your question from a year ago, what would your
            answer be now? Thought provoking isn't it?
          </Text>
          <Quote>
            Studies show “turning inward” can strengthen our emotional
            intelligence, which can make it easier for us to cope with life’s
            challenges.
          </Quote>
        </SubContainer>
        <SubContainer>
          <MediumText>So let's type out today's question!</MediumText>
          <Text>
            Make a question out of something that you thought a lot about today.
            <br />
            You will be asked the same question in exactly one year so you can
            sit back and reflect.
          </Text>
        </SubContainer>
        <FormContainer onSubmit={this.addQuestion} autoComplete="off">
          <FormInput
            type="text"
            name="question"
            placeholder=""
            value={this.state.question}
            onChange={this.updateQuestion}
          />

          <FormButton type="submit">Submit</FormButton>
        </FormContainer>
        <LastYear>
          <Text>
            If you entered a question on this day, last year, go ahead and click
            the button to see your question and start reflecting.
          </Text>
          <GetButton onClick={this.getQuestion}>Get question</GetButton>
          <MediumText>{this.state.theQuestion}</MediumText>
        </LastYear>
      </Container>
    );
  }
}
export default User;
