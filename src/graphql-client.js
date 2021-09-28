import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client'
import DebounceLink from 'apollo-link-debounce'
import 'firebase/auth'

const DEFAULT_DEBOUNCE_TIMEOUT = 500
const debounceLink = new DebounceLink(DEFAULT_DEBOUNCE_TIMEOUT)

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BACKEND_SERVER,
    credentials: 'include',
})

const link = ApolloLink.from([debounceLink, httpLink])

const graphqlClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
})

export default graphqlClient
