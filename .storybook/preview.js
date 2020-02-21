import { addDecorator } from '@storybook/react';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

addDecorator(storyFn => 
  <ThemeProvider theme={theme}>
  {storyFn()}
  </ThemeProvider>
  );