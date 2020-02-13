import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionSchema from "../../api/resolutions/Resolution.graphql";

const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello world";
    },
    resolutions() {
      return [
        {
          _id: "1",
          name: "this is a resolution name"
        },
        {
          _id: "2",
          name: "this is another resolution name"
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
