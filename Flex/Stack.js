import React from "react";
import PropTypes from "prop-types";
import { Flex } from "./Flex";

export function Stack({ gap = "1rem", children }) {
  return (
    <Flex direction="column" gap={gap}>
      {children}
    </Flex>
  );
}

Stack.propTypes = { gap: PropTypes.string };
