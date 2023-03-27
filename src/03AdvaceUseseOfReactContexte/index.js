import { Text, View } from "react-native";
import React from "react";
import { UserProvider } from "./userContext.js";
import ContextScreen01 from "./screen/ContextScreen01.js";
import ContextScreen02 from "./screen/ContextScreen02.js";

export default function AdvaceUseseOfReactContexte() {
  return (
    <UserProvider>
      <ContextScreen01 />
      <ContextScreen02 />
    </UserProvider>
  );
}
