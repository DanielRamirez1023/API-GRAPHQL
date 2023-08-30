export const typeDefs = `
   type Medicine {
    id: ID!
    name: String!
    laboratory: String!
    description: String!
    pharmacy: String!
    amount: Int!
  }

  type Query {
    medicineCount: Int!
    medicines: [Medicine]!
  }
`;
