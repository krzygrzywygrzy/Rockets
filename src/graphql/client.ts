import { ApolloClient, InMemoryCache } from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: concatPagination(),
        },
      },
    },
  }),
});

export default client;
