export const typeDefs = `

 enum TypePharmacy {
    Variante
    Loceria
    Tricentenario
    Popular
  }

  enum TypeRole {
    Admin,
    Regente,
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

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    role: TypeRole!
    createdAt: String,
    updateAt:String,
  }

  type Query {
    medicineCount: Int!
    ListMedicines: [Medicine]!
    ListUsers: [User]!
  }
  type Mutation {
    createMedicine(name:String,laboratory:String,description:String,pharmacy:TypePharmacy,amount:Int):Medicine
    deleteMedicine(_id:ID!):Medicine
    updateMedicine(_id:ID!,name:String,laboratory:String,description:String,pharmacy:TypePharmacy,completed:Boolean,amount:Int):Medicine
    createUser(name:String,email:String,password:String,role:String):User
    login(email:String,password:String):String
  }
`;
