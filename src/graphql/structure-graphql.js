export const typeDefs = `

 enum TypePharmacy {
    Variante
    Loceria
    Tricentenario
    Popular
  }

   type Medicine {
    _id: ID!
    name: String!
    laboratory: String!
    description: String!
    pharmacy: TypePharmacy!
    completed: Boolean!,
    amount: Int!
    createdAt: String,
    updateAt:String,
  }

  type Query {
    medicineCount: Int!
    ListMedicines: [Medicine]!
  }
  type Mutation {
    createMedicine(name:String,laboratory:String,description:String,pharmacy:TypePharmacy,amount:Int):Medicine
    deleteMedicine(_id:ID!):Medicine
    updateMedicine(_id:ID!,name:String,laboratory:String,description:String,pharmacy:TypePharmacy,completed:Boolean,amount:Int):Medicine
  }
`;
