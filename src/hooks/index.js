import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { StyleguideProvider } from "./styleguide";
import { PositionsProvider } from "./positions";

const Provider = ({ children }) => (
  <SafeAreaProvider>
    <PositionsProvider>
      <StyleguideProvider>{children}</StyleguideProvider>
    </PositionsProvider>
  </SafeAreaProvider>
);

export default Provider;
