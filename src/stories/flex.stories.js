import React from "react";
import { Flex } from "../Flex";
import { withKnobs, select } from "@storybook/addon-knobs";

import "./flex-stories.css";

export default {
  title: "Flex",
  component: Flex,
  decorators: [withKnobs]
};

function ColorBox({ children }) {
  return <div className="color-box">{children}</div>;
}

export function Direction(params) {
  const label = "Direction";
  const options = {
    row: "row",
    column: "column",
    "row-reverse": "row-reverse",
    "column-reverse": "column-reverse"
  };
  const defaultValue = "column";
  const groupId = "GROUP-ID1";

  const direction = select(label, options, defaultValue, groupId);

  return (
    <Flex direction={direction}>
      <ColorBox>1</ColorBox>
      <ColorBox>2</ColorBox>
      <ColorBox>3</ColorBox>
      <ColorBox>4</ColorBox>
      <ColorBox>5</ColorBox>
      <ColorBox>6</ColorBox>
      <ColorBox>7</ColorBox>
    </Flex>
  );
}

export function Navigation() {
  return (
    <nav>
      <Flex
        style={{ listStyle: "none", paddingLeft: "0" }}
        justifyContent="space-around"
        Component="ul"
      >
        <li style={{ border: "2px dotted red" }}>Home</li>
        <li style={{ border: "2px dotted red" }}>About</li>
        <li style={{ border: "2px dotted red" }}>Contact</li>
        <li style={{ border: "2px dotted red" }}>Terms and Conditions</li>
      </Flex>
    </nav>
  );
}

export function Center() {
  return (
    <Flex
      className="border"
      style={{ minHeight: "50vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <div
        style={{ height: "50px", width: "50px", backgroundColor: "#8ac539" }}
      ></div>
    </Flex>
  );
}

export function CardRow() {
  return (
    <Flex direction="row" justifyContent="space-around">
      <Card>
        This card has a lot more content which means that it defines the height
        of the container both the cards are in.
      </Card>
      <Card>This card doesn't have much content.</Card>
    </Flex>
  );
}

function Card({ children }) {
  return (
    <Flex style={{ width: "200px" }} direction="column">
      <div className="flex-fill orange">{children}</div>
      <div className="purple">Card footer</div>
    </Flex>
  );
}

export function FormControlFill({ children }) {
  return (
    <div>
      <Flex>
        <input className="flex-fill" type="text" />
        <input type="submit" value="Send" />
      </Flex>
    </div>
  );
}

export function BarChart({ children }) {
  return (
    <Flex
      style={{ height: "300px" }}
      alignItems="flex-end"
      justifyContent="space-around"
    >
      <div className="red" style={{ height: "50%", width: "33%" }} />
      <div className="red" style={{ height: "10%", width: "33%" }} />
      <div className="red" style={{ height: "98%", width: "33%" }} />
    </Flex>
  );
}
