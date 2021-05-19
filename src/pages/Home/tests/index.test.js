import { Provider } from 'react-redux'
import { render, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import HomePage, { GET_TOP_POLLS_QUERY } from '../index'
import store from '../../../store'

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

    const linkElement = getByText(/Top Trending Hashtags/i)
    expect(linkElement).toBeInTheDocument()
})

async function wait(ms = 0) {
    await act(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    })
}

test('HomePage renders polls from graphql endpoint', async () => {
    const mocks = [
        {
            request: {
                query: GET_TOP_POLLS_QUERY,
            },
            result: {
                data: {
                    getTopPolls: [
                        {
                            _id: '60a209670e91130020e3e4b6',
                            question: 'Sample question?',
                            options: [
                                {
                                    text: 'some text',
                                    votes: null,
                                },
                            ],
                            author: null,
                        },
                    ],
                },
            },
        },
    ]

    const { getByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        </MockedProvider>
    )

    await wait()

    const linkElement = getByText(/Sample question/i)
    expect(linkElement).toBeInTheDocument()
})
