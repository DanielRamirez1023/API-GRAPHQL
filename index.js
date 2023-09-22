import { startApolloServer} from './src/app.js'
import { typeDefs } from './src/structure-graphql.js'
import resolvers from './src/resolvers.js'


startApolloServer(typeDefs, resolvers);
