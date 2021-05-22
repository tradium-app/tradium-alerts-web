import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BACKEND_SERVER,
})

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

const graphqlClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: 'include',
})

export default graphqlClient
