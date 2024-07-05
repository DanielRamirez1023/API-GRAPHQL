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

  enum TypeStatus {
    SIN_REVISAR
    PENDIENTE
    COMPLETADO
  }

   type Medicine {
    _id: ID!
    name: String!
    laboratory: String!
    description: String!
    pharmacy: TypePharmacy!
    status: TypeStatus!,
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

  type Login {
    user: User
    token: String
  }

  type Query {
    medicineCount: Int!
    ListMedicines: [Medicine]!
    ListUsers: [User]!
  }

  
  type Mutation {
    createMedicine(name:String,laboratory:String,description:String,pharmacy:TypePharmacy,amount:Int,status:TypeStatus):Medicine
    deleteMedicine(_id:ID!):Medicine
    updateMedicine(_id:ID!,name:String,laboratory:String,description:String,pharmacy:TypePharmacy,completed:Boolean,amount:Int,status:TypeStatus):Medicine
    createUser(name:String,email:String,password:String,role:TypeRole):User
    login(email:String,password:String):Login
  }
`;
