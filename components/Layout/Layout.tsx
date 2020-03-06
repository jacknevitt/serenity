import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Abril Fatface', cursive;
    font-weight: 400;
  }
`;

type Props = {
  children: React.ReactNode;
  title?: string;
};

function Layout({ children, title = 'My Site' }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Work+Sans&display=swap"
        />
      </Head>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}

export default Layout;
