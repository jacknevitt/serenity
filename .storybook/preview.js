import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1025,
    large: 1280,
    xlarge: 1440,
  }
};

addDecorator(storyFn => 
  <ThemeProvider theme={theme}>
  {storyFn()}
  </ThemeProvider>
  );