import React from "react";
import { Stack } from "./Stack";

export default {
  title: "Stack",
  component: Stack,
};

export function Default(props) {
  return (
    <Stack {...props}>
      <div>Top</div>
      <div>Middle</div>
      <div>Bottom</div>
    </Stack>
  );
}
