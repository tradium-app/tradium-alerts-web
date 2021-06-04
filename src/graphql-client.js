import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import DebounceLink from 'apollo-link-debounce'

const authLink = setContext((_, { headers }) => {
    let accessToken = null
    if (localStorage.getItem('authUser')) {
        const authUser = JSON.parse(localStorage.getItem('authUser'))
        accessToken = authUser.accessToken
    }

    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    }
})

const DEFAULT_DEBOUNCE_TIMEOUT = 500
const debounceLink = new DebounceLink(DEFAULT_DEBOUNCE_TIMEOUT)

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BACKEND_SERVER,
})

const link = ApolloLink.from([debounceLink, authLink, httpLink])

const graphqlClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    credentials: 'include',
})

export default graphqlClient
