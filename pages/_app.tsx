import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
