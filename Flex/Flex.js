import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./flex.css";

export function Flex({
  children,
  direction,
  justifyContent,
  className,
  alignItems,
  wrap,
  Component = "div",
  ...rest
}) {
  const classes = classnames(className, "flex-container", {
    [`flex-justify-content-${justifyContent}`]: justifyContent,
    [`flex-${direction}`]: direction,
    [`flex-align-items-${alignItems}`]: alignItems,
    [`flex-wrap-${wrap}`]: wrap,
  });

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
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
