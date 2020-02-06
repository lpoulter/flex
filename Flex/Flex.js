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
  gap,
  ...rest
}) {
  const classes = classnames(className, "flex-container", {
    [`flex-justify-content-${justifyContent}`]: justifyContent,
    [`flex-${direction}`]: direction,
    [`flex-align-items-${alignItems}`]: alignItems,
    [`flex-wrap-${wrap}`]: wrap,
    "flex-gap": gap
  });

  let mappedChildren = children;

  if (gap) {
    mappedChildren = React.Children.map(children, (child, index) => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, {
          key: index,
          className: child && child.props && child.props.className ? `${child.props.className} flex-gap-item` : 'flex-gap-item'
        })
      }
      console.log('warning gap not applied child is not vaild element: ', child);
      return child
    })
  }

  return (
    <Component className={classes} {...rest}>
      {mappedChildren}
    </Component>
  );
}

Flex.propTypes = {
  alignItems: PropTypes.oneOf(["stretch", "flex-start", "flex-end", "center"]),
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse"
  ]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  wrap: PropTypes.oneOf(["wrap", "no-wrap", "wrap-reverse"])
};
