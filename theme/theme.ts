type AppTheme = {
  colors: {
    [key: string]: string;
  };
  breakpoints: {
    [key: string]: number;
  };
};

export const theme: AppTheme = {
  colors: {
    primary: '#0070f3',
  },
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1025,
    large: 1280,
    xlarge: 1440,
  },
};
