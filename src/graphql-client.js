import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphqlClient = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_SERVER,
    cache: new InMemoryCache(),
})

export default graphqlClient
