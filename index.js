import {ApolloServer, gql} from "@apollo/server";
const cars = [
    {
   model: "2005",
   brand: "BMW",
   color: "Blanco",
   propierty: "Estefanny"
    },
    {
    model: "2018",
    brand: "Mitsubishi",
    color: "Rojo",
    propierty: "Walter"
    },
    {
    model: "2020",
    brand: "Toyota",
    color: "Blanco",
    propierty: "Daniel"
    },
    {
    model: "2023",
    brand: "Mercedes",
    color: "Plata",
    propierty: "Felipe"
    },
            
]




const typeDefinitions = gql`
type Car {
    model: String!
    brand: String!
    color: String!
    propietary: String!

} 

type Query {
    carCount: Int!
    allCars: [Car]!
}
`

const resolvers = {
    Query: {
        carCount: () => cars.length,
        allCars: ()  => cars
    }
}


const server = new ApolloServer({
      typeDefs: typeDefinitions,
      resolvers
})

server.listen().then((url)=> {
    console.log(`server ready at ${url}`);
})