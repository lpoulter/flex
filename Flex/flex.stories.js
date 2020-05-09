import React from "react";
import { Flex, Base } from ".";
import {
  withKnobs,
  select,
  boolean,
  radios,
  number,
} from "@storybook/addon-knobs";

import "./flex-stories.css";

export default {
  title: "Flex",
  component: Flex,
  decorators: [withKnobs],
};

function ColorBox({ children, className, ...rest }) {
  return (
    <Base className={`color-box ${className}`} {...rest}>
      {children}
    </Base>
  );
}

export function Configurable() {
  return (
    <Flex
      style={{ height: "100vh" }}
      direction={radios(
        "Direction",
        {
          row: "row",
          column: "column",
          "row-reverse": "row-reverse",
          "column-reverse": "column-reverse",
        },
        "column"
      )}
      alignItems={radios(
        "Align Items",
        {
          stretch: "stretch",
          "flex-start": "flex-start",
          "flex-end": "flex-end",
          center: "center",
        },
        "stretch"
      )}
      justifyContent={radios(
        "Justify Content",
        {
          normal: "normal",
          "flex-start": "flex-start",
          "flex-end": "flex-end",
          center: "center",
          "space-between": "space-between",
          "space-around": "space-around",
          "space-evenly": "space-evenly",
        },
        "normal"
      )}
      wrap={radios(
        "Wrap",
        {
          wrap: "wrap",
          "no-wrap": "no-wrap",
          "wrap-reverse": "wrap-reverse",
        },
        "no-wrap"
      )}
      gap={number("Gap")}
    >
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

export function Direction() {
  return (
    <Flex
      direction={radios(
        "Direction",
        {
          row: "row",
          column: "column",
          "row-reverse": "row-reverse",
          "column-reverse": "column-reverse",
        },
        "column"
      )}
    >
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
        As="ul"
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

export function FlexGrow() {
  return (
    <Flex>
      <Flex grow={3} style={{ backgroundColor: "Red" }}>
        <div>Red</div>
      </Flex>
      <div style={{ backgroundColor: "blue" }}>blue</div>
    </Flex>
  );
}

export function FlexProperty() {
  return (
    <nav
      style={{
        width: "400px",
        resize: "horizontal",
        border: "1px dotted",
        overflow: "hidden",
      }}
    >
      <Flex As="ul" className="FlexBasis-nav">
        <Base As="li" flex="1 1 auto">
          <a href="#">Page 1</a>
        </Base>
        <Base As="li" flex="1 1 auto">
          <a href="#">Page 2</a>
        </Base>
        <Base As="li" flex="1 1 auto">
          <a href="#">Page 3 is longer</a>
        </Base>
        <Base As="li" flex="1 1 auto">
          <a href="#">Page 4</a>
        </Base>
      </Flex>
    </nav>
  );
}

export function FlexGrow2() {
  return (
    <Flex>
      <ColorBox grow={3}>3</ColorBox>
      <Base grow={2}>
        <div>grow 2</div>
      </Base>
      <ColorBox />
    </Flex>
  );
}

export function Grid() {
  return (
    <Flex wrap="wrap" gap="0.5rem 1rem">
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
      <ColorBox style={{ width: "28%" }} />
    </Flex>
  );
}

export function Stack() {
  return (
    <Flex direction="column" alignItems="center" gap="1rem">
      <ColorBox style={{ width: "40%", height: "40px" }} />
      <ColorBox style={{ width: "40%", height: "40px" }} />
      <ColorBox style={{ width: "40%", height: "40px" }} />
      <ColorBox style={{ width: "40%", height: "40px" }} />
      <ColorBox style={{ width: "40%", height: "40px" }} />
      <ColorBox style={{ width: "40%", height: "40px" }} />
      <ColorBox style={{ width: "40%", height: "40px" }} />
    </Flex>
  );
}

export function Flex1() {
  return (
    <Flex gap="1rem">
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
    </Flex>
  );
}

export function TwoOneGrid() {
  return (
    <Flex gap="1rem" wrap="wrap">
      <ColorBox style={{ width: "45%" }} grow={1} />
      <ColorBox style={{ width: "45%" }} grow={1} />
      <ColorBox style={{ width: "100%" }} grow={1} />
      <ColorBox style={{ width: "45%" }} grow={1} />
      <ColorBox style={{ width: "45%" }} grow={1} />    
    </Flex>
  );
}



export function NestFlex() {
  return (
    <Flex As="body" direction="column" wrap="wrap" style={{ minHeight: "100vh" }}>
      <header style={{ height: "20vh", backgroundColor: "green" }}>
        Header
      </header>
      <Flex direction="row" grow={1}>
        <Base As="nav" grow={1}>
          Sidebar
        </Base>
        <Base As="article" grow={1} style={{ backgroundColor: "red" }}>
          Article
        </Base>
        <Base As="aside" flex="0 0 20vw">
          Aside
        </Base>
      </Flex>
      <Base As="footer" style={{ height: "20vh", backgroundColor: "green" }}>
        Footer
      </Base>
    </Flex>
  );
}

export function gapPresets() {
  return (
    <Flex
      gap={radios(
        "Gap",
        {
          "tiny": "tiny",
          "small": "small",
          "medium": "medium",
          "large": "large",
        },
        "medium"
      )}
    >
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
      <ColorBox grow={1} />
    </Flex>
  );
}