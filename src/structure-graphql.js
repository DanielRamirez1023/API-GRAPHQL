export const typeDefs = `

 enum TypePharmacy {
    Variante
    Loceria
    Tricentenario
    Popular
  }

   type Medicine {
    id: ID!
    name: String!
    laboratory: String!
    description: String!
    pharmacy: TypePharmacy!
    amount: Int!
  }

 
  type Query {
    medicineCount: Int!
    medicines: [Medicine]!
  }
`;
