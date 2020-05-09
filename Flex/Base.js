import React from "react";

export function Base({
  As = "div",
  className,
  children,
  grow,
  basis,
  shrink,
  style,
  flex,
  ...rest
}) {
  const elementStyle = {
    ...style,
    ...(grow && { flexGrow: grow }),
    ...(basis && { flexBasis: basis }),
    ...(shrink && { flexShrink: shrink }),
    ...(flex && { flex }),
  };
  
  return (
    <As className={className} {...rest} style={elementStyle}>
      {children}
    </As>
  );
}
