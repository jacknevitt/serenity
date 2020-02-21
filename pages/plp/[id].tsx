import { NextPage } from 'next';
import { Button } from 'atoms';
import Layout from '../../components/Layout/Layout';

type Props = {
  id: string | string[];
};

const ProductListingPage: NextPage<Props> = ({ id }: Props) => (
  <Layout>
    <h1>{id}</h1>
    <Button>Click</Button>
  </Layout>
);

ProductListingPage.getInitialProps = ({ query }): Props => {
  // fetch data from graphql
  return { id: query.id };
};

export default ProductListingPage;
