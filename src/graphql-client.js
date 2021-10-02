import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client'
import DebounceLink from 'apollo-link-debounce'
import 'firebase/auth'
import { onError } from '@apollo/client/link/error'

const DEFAULT_DEBOUNCE_TIMEOUT = 500

const debounceLink = new DebounceLink(DEFAULT_DEBOUNCE_TIMEOUT)

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BACKEND_SERVER + '/graphql',
    credentials: 'include',
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink, debounceLink, httpLink])

const graphqlClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
})

export default graphqlClient
