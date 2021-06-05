import { Provider } from 'react-redux'
import { render, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import configureMockStore from 'redux-mock-store'
import SearchPage from '../index'

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
const store = mockStore({ SearchReducer: { searchPollsResult: mockTopPolls }, Home: { topPolls: mockTopPolls } })

test('SearchPage renders without error when data is empty', async () => {
    const mocks = []

    const { getAllByText } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>
                <BrowserRouter>
                    <SearchPage />
                </BrowserRouter>
            </Provider>
        </MockedProvider>
    )

    await wait(100)

    const linkElement = getAllByText(/Sample question/i)
    expect(linkElement[0]).toBeInTheDocument()
})

async function wait(ms = 0) {
    await act(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    })
}
