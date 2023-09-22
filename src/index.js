import { startApolloServer} from './app.js'
import { typeDefs } from './structure-graphql.js'
import resolvers from './resolvers.js'


startApolloServer(typeDefs, resolvers);
