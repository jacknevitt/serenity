import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { NextPageContext } from 'next';

export default function createApolloClient(
  initialState: NormalizedCacheObject,
  ctx?: NextPageContext,
): ApolloClient<NormalizedCacheObject> {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'https://es-elastigraph.made.com/graphql', // Server URL (must be absolute)
      // Additional fetch() options like `credentials` or `headers`
      // credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
