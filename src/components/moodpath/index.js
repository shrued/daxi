import React from "react";
import { Form, Radio, Slider } from "antd";
import { Container, SubTitle, Title } from "./moodpath";

export default function MoodPath() {
  return (
    <Container>
      <Title>Mood Path</Title>
      <SubTitle>
        You will be asked to answer a bunch of questions about your emotional
        and physical well-being. These questions will help you reflect on your
        daily experiences and moods.
      </SubTitle>
      <Form>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Do you often experience extreme inner turmoil that has no obvious cause?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Did you sleep poorly last night?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Are you feeling down or sad?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Have you recently talked openly about your feelings?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Do you often spend a lot of time trying to perfect things that you have already done well?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Do you use your smartphone to escape from negative feelings?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="radio-button"
          tooltip="Why am I being asked this? Your answer might be relevant in the process of helping. You may skip a question if you feel like it."
          label="Do you have persistent or recurring pain?"
        >
          <Radio.Group>
            <Radio.Button value="a">Yes</Radio.Button>
            <Radio.Button value="b">No</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="slider" label="How do you feel right now?">
          <Slider
            marks={{
              0: "Very bad",
              20: "Bad",
              40: "Moderate",
              60: "Good",
              80: "Very good",
              100: "Not sure",
            }}
          />
        </Form.Item>
      </Form>
    </Container>
  );
}
