import React from "react";
import { Base } from "./Base";

export default {
  title: "Components/Base",
  component: Base,
};

export function Default() {
  return <Base>Default Base</Base>;
}

export function As() {
  return <Base As="input" />;
}
