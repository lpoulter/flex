import React from "react";
import Base from "./Base";
export default {
  title: "Components/Base",
  component: Base
};
export function Default() {
  return /*#__PURE__*/React.createElement(Base, null, "Default Base");
}
export function As() {
  return /*#__PURE__*/React.createElement(Base, {
    As: "input"
  });
}