import { NextPage } from 'next';
import Layout from '../components/Layout/Layout';

import ApolloClient, { gql } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://preprod-elastigraph.made.com/graphql',
  fetch,
});

const QUERY = gql`
  {
    router(store: GB, url: "sofas-and-armchairs/sofas") {
      views {
        __typename
        ... on TagView {
          name
        }
      }
    }
  }
`;

type Props = {
  userAgent: string;
};

const TestApollo: React.FC = () => {
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <pre>{'Loading…'}</pre>;
  if (error) return <pre>{error.message}</pre>;
  return <pre>{JSON.stringify(data)}</pre>;
};

const Home: NextPage<Props> = ({ userAgent }: Props) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <h1>Home Page</h1>
        <p>Work in progress</p>
        <p>{userAgent}</p>
        <TestApollo />
      </Layout>
    </ApolloProvider>
  );
};

Home.getInitialProps = async ({ req }): Promise<Props> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
