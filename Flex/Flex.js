import React from "react";
import PropTypes from "prop-types";
import Base from "./Base";

export function Flex({
  children,
  style,
  direction,
  justifyContent,
  alignItems,
  wrap,
  gap,
  ...rest
}) {
  return (
    <Base
      {...rest}
      style={{
        ...style,
        display: "flex",
        justifyContent: justifyContent,
        flexDirection: direction,
        alignItems: alignItems,
        flexWrap: wrap,
        gap,
      }}
    >
      {children}
    </Base>
  );
}

Flex.propTypes = {
  alignItems: PropTypes.oneOf(["stretch", "flex-start", "flex-end", "center"]),
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "normal",
  ]),
  wrap: PropTypes.oneOf(["wrap", "no-wrap", "wrap-reverse"]),
  gap: PropTypes.number,
};
