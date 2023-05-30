import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useWindowDimensions } from 'react-native';

import  LIGHT_COLORS  from '../styles/colors';

const StyleguideContext = createContext({});

const StyleguideProvider = ({ children }) => {
  const windowDimensions = useWindowDimensions();

  const colors = useMemo(() => {
    return LIGHT_COLORS;
  }, []);

  const initialStyleguide = {};

  initialStyleguide.colors = colors;

  const [styleguide, setStyleguide] = useState(initialStyleguide);

  useEffect(() => {
    setStyleguide((prevState) => ({
      ...prevState,
      colors,
    }));
  }, [colors]);

  const WIDTH_WINDOW_TABLET = 900;

  const responsive = useMemo(() => {
    return windowDimensions.width < WIDTH_WINDOW_TABLET ? 'mobile' : 'web';
  }, [windowDimensions.width]);

  return (
    <StyleguideContext.Provider
      value={{
        styleguide,
        setStyleguide,
        responsive,
      }}>
      {children}
    </StyleguideContext.Provider>
  );
};

function useStyleguide() {
  const context = useContext(StyleguideContext);

  if (!context) {
    throw new Error('useStyleguide must be used within as StyleguideProvider');
  }

  return context;
}

export { StyleguideProvider, useStyleguide };
