import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Base } from "./Base";
import "./Flex.css";
/**
 * As a Flex container. Pass continer styles.
 * Will pass Flex child styles onto Base.
 */
export function Flex({
  children,
  className,
  style,
  direction,
  justifyContent,
  alignItems,
  wrap,
  gap,
  ...rest
}) {
  const gapContainsNumbers = /[0-9]/.test(gap);
  const classes = classnames(
    "flex",
    {
      [`flex--${gap}`]: !gapContainsNumbers,
    },
    className
  );

  return (
    <Base
      {...rest}
      className={classes}
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
  gap: PropTypes.string,
};
