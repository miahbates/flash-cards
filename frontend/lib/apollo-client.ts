import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const graphqlUrl =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://127.0.0.1:8000/graphql/";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: graphqlUrl,
  }),
});
