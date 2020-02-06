import Head from 'next/head';

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
      {children}
    </>
  );
}

export default Layout;
