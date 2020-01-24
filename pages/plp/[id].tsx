import { NextPage } from "next";

type Props = {
  id: string | string[];
};

const ProductListingPage: NextPage<Props> = ({ id }) => (
  <>
    <h1>{id}</h1>
  </>
);

ProductListingPage.getInitialProps = ({ query }) => {
  // fetch data from graphql
  return { id: query.id };
};

export default ProductListingPage;
