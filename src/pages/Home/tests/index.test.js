import { Provider } from 'react-redux'
import { render, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import HomePage, { GET_TOP_POLLS_QUERY } from '../index'
import configureMockStore from 'redux-mock-store'

const mockTopPolls = [
    {
        _id: '60a209670e91130020e3e4b6',
        question: 'Sample question?',
        options: [
            {
                _id: '60a209670e91130020e3e4b1',
                text: 'some text',
                order: 1,
                selected: false,
                totalVotes: 1,
            },
        ],
        author: {
            _id: '60a209670e91130020e3e4b1',
            name: '',
            imageUrl: '',
            status: '',
        },
        createdDate: null,
        modifiedDate: null,
    },
]

const mockStore = configureMockStore([])
const store = mockStore({ Home: { topPolls: mockTopPolls } })

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

    const linkElement = getByText(/Top Trending Tags/i)
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
                    getTopPolls: mockTopPolls,
                },
            },
        },
    ]

    const { getAllByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        </MockedProvider>
    )

    await wait(100)

    const linkElement = getAllByText(/Sample question/i)
    expect(linkElement[0]).toBeInTheDocument()
})
