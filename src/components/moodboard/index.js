import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
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
  const sad = ["04-03-2021", "13-03-2021", "05-03-2021"];
  const angry = ["06-03-2021", "01-03-2021", "08-03-2021"];
  const optimistic = ["14-03-2021", "09-03-2021", "10-03-2021"];
  const bored = ["03-03-2021", "02-03-2021", "15-03-2021"];
  const excited = ["07-03-2021", "11-03-2021"];
  const peaceful = ["12-03-2021", "16-03-2021"];
  const happy = ["17-03-2021", "18-03-2021"];

  return (
    <>
      <Container>
        <QuestionContainer>
          <Question>How are you feeling today?</Question>
        </QuestionContainer>
        <MoodBoardContainer>
          <MoodButtons>
            <button className="mood-button peaceful">
              <span>Peaceful</span>
            </button>
            <button className="mood-button optimistic">
              <span>Optimistic</span>
            </button>
            <button className="mood-button excited">
              <span>Excited</span>
            </button>
            <button className="mood-button happy">
              <span>Happy</span>
            </button>
            <button className="mood-button sad">
              <span>Sad</span>
            </button>
            <button className="mood-button angry">
              <span>Angry</span>
            </button>
            <button className="mood-button bored">
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
            ></Calendar>
          </Board>
        </MoodBoardContainer>
      </Container>
    </>
  );
}
