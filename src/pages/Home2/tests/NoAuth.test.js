import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import HomePage from '../index'
import { store } from '../../../store'

test('HomePage renders without error when data is empty', () => {
    const mocks = []

    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        </MockedProvider>
    )

    const linkElement = getByText(/Reddit Rank/i)
    expect(linkElement).toBeInTheDocument()
})
