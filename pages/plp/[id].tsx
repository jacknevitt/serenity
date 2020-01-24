import { NextPage } from 'next';
import { Button } from 'atoms';

type Props = {
  id: string | string[];
};

const ProductListingPage: NextPage<Props> = ({ id }: Props) => (
  <>
    <h1>{id}</h1>
    <Button>Click</Button>
  </>
);

ProductListingPage.getInitialProps = ({ query }): Props => {
  // fetch data from graphql
  return { id: query.id };
};

export default ProductListingPage;
