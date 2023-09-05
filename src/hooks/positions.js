import React, { createContext, useContext, useState } from "react";

const PositionsContext = createContext({});

const PositionsProvider = ({ children }) => {
  const [positions, setPositions] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <PositionsContext.Provider
      value={{
        positions,
        setPositions,
        scrollPosition,
        setScrollPosition,
      }}
    >
      {children}
    </PositionsContext.Provider>
  );
};

function usePositions() {
  const context = useContext(PositionsContext);

  if (!context) {
    throw new Error("usePositions must be used within as PositionsProvider");
  }

  return context;
}

export { PositionsProvider, usePositions };
