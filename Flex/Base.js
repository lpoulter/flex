import React from "react";

export default function Base({ As = "div", className, children, ...rest }) {
  return (
    <As className={className} {...rest}>
      {children}
    </As>
  );
}
