import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import { ApolloProvider } from '@apollo/client/react'
import graphqlClient from './graphql-client'
import './firebaseInit'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

LogRocket.init('kwnmph/devpolls')
setupLogRocketReact(LogRocket)

const app = (
    <ApolloProvider client={graphqlClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()
