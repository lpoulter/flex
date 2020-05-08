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
         return (
           <As
             className={className}
             {...rest}
             style={{
               ...style,
               flexGrow: grow,
               flexBasis: basis,
               flexShrink: shrink,
             }}
           >
             {children}
           </As>
         );
       }
