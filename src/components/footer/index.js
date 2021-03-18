import React from "react";
import {
  Container,
  Icon,
  Info,
  TabHeading,
  TabItem,
  Tabs,
  Text,
} from "./footer";

import {
  MediumOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <Container>
        <Tabs>
          <TabHeading>Company</TabHeading>
          <TabItem href="/about">About Us</TabItem>
          <TabItem href="/help">Help</TabItem>
        </Tabs>
        <Tabs>
          <TabHeading>Features</TabHeading>
          <TabItem href="/articles">Articles</TabItem>
          <TabItem href="/moodboard">Mood Tracking Board</TabItem>
          <TabItem href="/moodpath">Mood Path</TabItem>
          <TabItem href="/reflection">Reflection</TabItem>
        </Tabs>
        <Info>
          <Text>Copyright © 2021 Daxi. All Rights Reserved.</Text>
          <Icon href="#" target="_blank" rel="noreferrer">
            <FacebookOutlined />
          </Icon>
          <Icon href="#" target="_blank" rel="noreferrer">
            <InstagramOutlined />
          </Icon>
          <Icon href="#" target="_blank" rel="noreferrer">
            <MediumOutlined />
          </Icon>
          <Icon href="#" target="_blank" rel="noreferrer">
            <LinkedinOutlined />
          </Icon>
          <Icon href="#" target="_blank" rel="noreferrer">
            <TwitterOutlined />
          </Icon>
          <Icon href="#" target="_blank" rel="noreferrer">
            <YoutubeOutlined />
          </Icon>
        </Info>
      </Container>
    </>
  );
}
