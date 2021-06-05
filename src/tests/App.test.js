import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from '../App'
import { store, persistor } from '../store'
import { PersistGate } from 'redux-persist/integration/react'

test('renders learn react link', () => {
    const mocks = []

    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </MockedProvider>
    )
    const linkElement = getByText(/Create a Poll/i)
    expect(linkElement).toBeInTheDocument()
})
