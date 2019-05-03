import { gql } from 'apollo-server';

export default gql`
  type UserType {
    firstname: String
    lastname: String
    email: String
  }

  type Query {
    Users: [UserType]
    User(id: String!): UserType
  }
`;