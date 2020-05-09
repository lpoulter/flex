function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import { Flex, Base } from ".";
import { withKnobs, select, boolean as _boolean, radios, number } from "@storybook/addon-knobs";
import "./flex-stories.css";
export default {
  title: "Flex",
  component: Flex,
  decorators: [withKnobs]
};

function ColorBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React.createElement(Base, _extends({
    className: "color-box ".concat(className)
  }, rest), children);
}

export function Configurable() {
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      height: "100vh"
    },
    direction: radios("Direction", {
      row: "row",
      column: "column",
      "row-reverse": "row-reverse",
      "column-reverse": "column-reverse"
    }, "column"),
    alignItems: radios("Align Items", {
      stretch: "stretch",
      "flex-start": "flex-start",
      "flex-end": "flex-end",
      center: "center"
    }, "stretch"),
    justifyContent: radios("Justify Content", {
      normal: "normal",
      "flex-start": "flex-start",
      "flex-end": "flex-end",
      center: "center",
      "space-between": "space-between",
      "space-around": "space-around",
      "space-evenly": "space-evenly"
    }, "normal"),
    wrap: radios("Wrap", {
      wrap: "wrap",
      "no-wrap": "no-wrap",
      "wrap-reverse": "wrap-reverse"
    }, "no-wrap"),
    gap: number("Gap")
  }, /*#__PURE__*/React.createElement(ColorBox, null, "1"), /*#__PURE__*/React.createElement(ColorBox, null, "2"), /*#__PURE__*/React.createElement(ColorBox, null, "3"), /*#__PURE__*/React.createElement(ColorBox, null, "4"), /*#__PURE__*/React.createElement(ColorBox, null, "5"), /*#__PURE__*/React.createElement(ColorBox, null, "6"), /*#__PURE__*/React.createElement(ColorBox, null, "7"));
}
export function Direction() {
  return /*#__PURE__*/React.createElement(Flex, {
    direction: radios("Direction", {
      row: "row",
      column: "column",
      "row-reverse": "row-reverse",
      "column-reverse": "column-reverse"
    }, "column")
  }, /*#__PURE__*/React.createElement(ColorBox, null, "1"), /*#__PURE__*/React.createElement(ColorBox, null, "2"), /*#__PURE__*/React.createElement(ColorBox, null, "3"), /*#__PURE__*/React.createElement(ColorBox, null, "4"), /*#__PURE__*/React.createElement(ColorBox, null, "5"), /*#__PURE__*/React.createElement(ColorBox, null, "6"), /*#__PURE__*/React.createElement(ColorBox, null, "7"));
}
export function Navigation() {
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement(Flex, {
    style: {
      listStyle: "none",
      paddingLeft: "0"
    },
    justifyContent: "space-around",
    As: "ul"
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      border: "2px dotted red"
    }
  }, "Home"), /*#__PURE__*/React.createElement("li", {
    style: {
      border: "2px dotted red"
    }
  }, "About"), /*#__PURE__*/React.createElement("li", {
    style: {
      border: "2px dotted red"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("li", {
    style: {
      border: "2px dotted red"
    }
  }, "Terms and Conditions")));
}
export function Center() {
  return /*#__PURE__*/React.createElement(Flex, {
    className: "border",
    style: {
      minHeight: "50vh"
    },
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "50px",
      width: "50px",
      backgroundColor: "#8ac539"
    }
  }));
}
export function CardRow() {
  return /*#__PURE__*/React.createElement(Flex, {
    direction: "row",
    justifyContent: "space-around"
  }, /*#__PURE__*/React.createElement(Card, null, "This card has a lot more content which means that it defines the height of the container both the cards are in."), /*#__PURE__*/React.createElement(Card, null, "This card doesn't have much content."));
}

function Card(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      width: "200px"
    },
    direction: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-fill orange"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "purple"
  }, "Card footer"));
}

export function FormControlFill(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement("input", {
    className: "flex-fill",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Send"
  })));
}
export function BarChart(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      height: "300px"
    },
    alignItems: "flex-end",
    justifyContent: "space-around"
  }, /*#__PURE__*/React.createElement("div", {
    className: "red",
    style: {
      height: "50%",
      width: "33%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "red",
    style: {
      height: "10%",
      width: "33%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "red",
    style: {
      height: "98%",
      width: "33%"
    }
  }));
}
export function FlexGrow() {
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Flex, {
    grow: 3,
    style: {
      backgroundColor: "Red"
    }
  }, /*#__PURE__*/React.createElement("div", null, "Red")), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "blue"
    }
  }, "blue"));
}
export function FlexProperty() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: "400px",
      resize: "horizontal",
      border: "1px dotted",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Flex, {
    As: "ul",
    className: "FlexBasis-nav"
  }, /*#__PURE__*/React.createElement(Base, {
    As: "li",
    flex: "1 1 auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Page 1")), /*#__PURE__*/React.createElement(Base, {
    As: "li",
    flex: "1 1 auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Page 2")), /*#__PURE__*/React.createElement(Base, {
    As: "li",
    flex: "1 1 auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Page 3 is longer")), /*#__PURE__*/React.createElement(Base, {
    As: "li",
    flex: "1 1 auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Page 4"))));
}
export function FlexGrow2() {
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(ColorBox, {
    grow: 3
  }, "3"), /*#__PURE__*/React.createElement(Base, {
    grow: 2
  }, /*#__PURE__*/React.createElement("div", null, "grow 2")), /*#__PURE__*/React.createElement(ColorBox, null));
}
export function Grid() {
  return /*#__PURE__*/React.createElement(Flex, {
    wrap: "wrap",
    gap: "0.5rem 1rem"
  }, /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "28%"
    }
  }));
}
export function Stack() {
  return /*#__PURE__*/React.createElement(Flex, {
    direction: "column",
    alignItems: "center",
    gap: "1rem"
  }, /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "40%",
      height: "40px"
    }
  }));
}
export function Flex1() {
  return /*#__PURE__*/React.createElement(Flex, {
    gap: "1rem"
  }, /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    grow: 1
  }));
}
export function TwoOneGrid() {
  return /*#__PURE__*/React.createElement(Flex, {
    gap: "1rem",
    wrap: "wrap"
  }, /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "45%"
    },
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "45%"
    },
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "100%"
    },
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "45%"
    },
    grow: 1
  }), /*#__PURE__*/React.createElement(ColorBox, {
    style: {
      width: "45%"
    },
    grow: 1
  }));
}
export function NestFlex() {
  return /*#__PURE__*/React.createElement(Flex, {
    As: "body",
    direction: "column",
    wrap: "wrap",
    style: {
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: "20vh",
      backgroundColor: "green"
    }
  }, "Header"), /*#__PURE__*/React.createElement(Flex, {
    direction: "row",
    grow: 1
  }, /*#__PURE__*/React.createElement(Base, {
    As: "nav",
    grow: 1
  }, "Sidebar"), /*#__PURE__*/React.createElement(Base, {
    As: "article",
    grow: 1,
    style: {
      backgroundColor: "red"
    }
  }, "Article"), /*#__PURE__*/React.createElement(Base, {
    As: "aside",
    flex: "0 0 20vw"
  }, "Aside")), /*#__PURE__*/React.createElement(Base, {
    As: "footer",
    style: {
      height: "20vh",
      backgroundColor: "green"
    }
  }, "Footer"));
}