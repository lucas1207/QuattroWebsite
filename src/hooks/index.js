import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StyleguideProvider } from "./styleguide";

const Provider = ({ children }) => (
  <SafeAreaProvider>
    <StyleguideProvider>{children}</StyleguideProvider>
  </SafeAreaProvider>
);

export default Provider;
