import Head from 'next/head';
import Header from '../Header/Header';

type Props = {
  children: React.ReactNode;
  title?: string;
};

function Layout({ children, title = 'My Site' }: Props): React.ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
}

export default Layout;
