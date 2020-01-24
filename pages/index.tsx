import { NextPage } from 'next';

type Props = {
  userAgent: string;
};

const Home: NextPage<Props> = ({ userAgent }: Props) => (
  <>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <p>Some text</p>
  </>
);

Home.getInitialProps = async ({ req }): Promise<Props> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
