import React from "react";
import { Container, SubContent, SubHeading, SubTitle, Title } from "./therapy";

export default function Therapy() {
  return (
    <Container>
      <Title>Help is available</Title>
      <SubTitle>
        Suicidal thoughts can be complex, frightening and confusing.
      </SubTitle>
      <SubHeading>I want to die. How will talking help me?</SubHeading>
      <SubContent>
        People experienced in listening to people with suicidal thoughts,
        feelings and plans are here to support you: when you’re desperate or on
        edge, they can help you get through that moment and help make sense of
        what you’re feeling. They can also identify other forms of help if you
        think you want it.
      </SubContent>
      <SubHeading>When to get professional help for depression?</SubHeading>
      <SubContent>
        If you’ve taken self-help steps and made positive lifestyle changes and
        still find your depression getting worse, seek professional help.
        Needing additional help doesn’t mean you’re weak. Sometimes the negative
        thinking in depression can make you feel like you’re a lost cause, but
        depression can be treated and you can feel better! Don’t forget about
        these self-help tips, though. Even if you’re receiving professional
        help, these tips can be part of your treatment plan, speeding your
        recovery and preventing depression from returning.
      </SubContent>
    </Container>
  );
}
