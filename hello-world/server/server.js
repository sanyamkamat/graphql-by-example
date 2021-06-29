const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  schema {
    query: Query
  }
  
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello World!'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 9999 })
  .then(({url}) => console.log(`Server running at ${url}`));

