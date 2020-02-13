import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import merge from "lodash/merge";

import ResolutionSchema from "../../api/resolutions/Resolution.graphql";
import ResolutionResolvers from "../../api/resolutions/resolvers";

const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionSchema];

const hiResolver = {
  Query: {
    hi() {
      return "Hello world";
    }
  }
};

const resolvers = merge(hiResolver, ResolutionResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
