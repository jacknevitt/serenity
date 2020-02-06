import { NextPage } from 'next';
import Layout from '../components/Layout/Layout';

type Props = {
  userAgent: string;
};

const Home: NextPage<Props> = ({ userAgent }: Props) => (
  <Layout>
    <h1>Home Page</h1>
    <p>Work in progress</p>
    <p>{userAgent}</p>
  </Layout>
);

Home.getInitialProps = async ({ req }): Promise<Props> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
