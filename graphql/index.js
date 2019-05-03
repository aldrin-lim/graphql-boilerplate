import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import UserType from './types/UserType';
import UserResolver from './resolvers/UserResolver';

const typeDefs = mergeTypes([UserType], { all: true });
const resolvers = mergeResolvers([UserResolver]);

export default makeExecutableSchema({
  typeDefs, resolvers 
});