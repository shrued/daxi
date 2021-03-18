import React from "react";
import { Container, Icon, Text } from "./footer";

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
      </Container>
    </>
  );
}
