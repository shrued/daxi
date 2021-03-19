import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import useForceUpdate from "use-force-update";

import {
  Board,
  Container,
  MoodBoardContainer,
  MoodButtons,
  Question,
  QuestionContainer,
} from "./moodboard";

export default function MoodBoard() {
  const [value, onChange] = useState(new Date());

  const [sad, setsad] = useState(["04-03-2021", "13-03-2021", "05-03-2021"]);
  const [angry, setangry] = useState([
    "06-03-2021",
    "01-03-2021",
    "08-03-2021",
  ]);
  const [optimistic, setoptimistic] = useState([
    "14-03-2021",
    "09-03-2021",
    "10-03-2021",
  ]);
  const [bored, setbored] = useState([
    "03-03-2021",
    "02-03-2021",
    "15-03-2021",
  ]);
  const [excited, setexcited] = useState(["07-03-2021", "11-03-2021"]);
  const [peaceful, setpeaceful] = useState(["12-03-2021", "16-03-2021"]);
  const [happy, sethappy] = useState(["17-03-2021", "18-03-2021"]);

  const forceUpdate = useForceUpdate();

  function setPeaceful() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    peaceful.push(time);
    forceUpdate();
  }

  function setOptimistic() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    optimistic.push(time);
    forceUpdate();
  }

  function setExcited() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    excited.push(time);
    forceUpdate();
  }

  function setHappy() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    happy.push(time);
    forceUpdate();
  }

  function setSad() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    sad.push(time);
    forceUpdate();
  }

  function setAngry() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    angry.push(time);
    forceUpdate();
  }

  function setBored() {
    var today = new Date();
    var time =
      today.getDate() +
      "-" +
      "0" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    bored.push(time);
    forceUpdate();
  }

  return (
    <>
      <Container>
        <QuestionContainer>
          <Question>How are you feeling today?</Question>
        </QuestionContainer>
        <MoodBoardContainer>
          <MoodButtons>
            <button
              className="mood-button peaceful"
              onClick={() => setPeaceful()}
            >
              <span>Peaceful</span>
            </button>
            <button
              className="mood-button optimistic"
              onClick={() => setOptimistic()}
            >
              <span>Optimistic</span>
            </button>
            <button
              className="mood-button excited"
              onClick={() => setExcited()}
            >
              <span>Excited</span>
            </button>
            <button className="mood-button happy" onClick={() => setHappy()}>
              <span>Happy</span>
            </button>
            <button className="mood-button sad" onClick={() => setSad()}>
              <span>Sad</span>
            </button>
            <button className="mood-button angry" onClick={() => setAngry()}>
              <span>Angry</span>
            </button>
            <button className="mood-button bored" onClick={() => setBored()}>
              <span>Bored</span>
            </button>
          </MoodButtons>
          <Board>
            <Calendar
              style={{ height: 500 }}
              onChange={onChange}
              value={value}
              tileClassName={({ date, view }) => {
                if (sad.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                  return "highlight-sad";
                } else if (
                  angry.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight-angry";
                } else if (
                  optimistic.find(
                    (x) => x === moment(date).format("DD-MM-YYYY")
                  )
                ) {
                  return "highlight-optimistic";
                } else if (
                  bored.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight-bored";
                } else if (
                  excited.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight-excited";
                } else if (
                  peaceful.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight-peaceful";
                } else if (
                  happy.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight-happy";
                }
              }}
            />
          </Board>
        </MoodBoardContainer>
      </Container>
    </>
  );
}
