import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Base from "./Base";

import "./flex.css";

export function Flex({
  children,
  direction,
  justifyContent,
  className,
  alignItems,
  wrap,
  gap,
  ...rest
}) {

  const classes = classnames(className, "flex-container", {
    [`flex-justify-content-${justifyContent}`]: justifyContent,
    [`flex-${direction}`]: direction,
    [`flex-align-items-${alignItems}`]: alignItems,
    [`flex-wrap-${wrap}`]: wrap,
    [`flex-${gap}`]: gap,
  });

  return (
    <Base className={classes} {...rest}>
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
};
