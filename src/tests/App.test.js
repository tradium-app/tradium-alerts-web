import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from '../App'
import store from '../store'

test('renders learn react link', () => {
    const mocks = []

    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>
                <App />
            </Provider>
        </MockedProvider>
    )
    const linkElement = getByText(/Create a Poll/i)
    expect(linkElement).toBeInTheDocument()
})
