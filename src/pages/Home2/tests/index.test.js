import { Provider } from 'react-redux'
import { render, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing'
import HomePage, { GET_WATCHLIST_QUERY } from '../index'
import configureMockStore from 'redux-mock-store'

const mockWatchList = [
    {
        id: '610a014e4104c5349ed775ea',
        symbol: 'AAPL',
        company: null,
        price: 142.9,
        changePercent: -0.2721749,
        marketCap: 2332572.0,
        week52High: 157.26,
        week52Low: 107.32,
        beta: 1.22666,
        revenueGrowthQuarterlyYoy: 36.43964,
        revenueGrowthTTMYoy: 26.76506,
        rsi: 42.60408,
        trend: 'Down',
        redditRank: 24.0,
    },
    {
        id: '610a014e4104c5349ed77602',
        symbol: 'ABNB',
        company: null,
        price: 169.97,
        changePercent: 0.21815749,
        marketCap: 103562.6,
        week52High: 219.94,
        week52Low: 121.5,
        beta: 0.0,
        revenueGrowthQuarterlyYoy: 298.835,
        revenueGrowthTTMYoy: 12.58706,
        rsi: 53.521137,
        trend: 'Up',
        redditRank: 0.0,
    },
]

const mockStore = configureMockStore([])
const store = mockStore({ Login: { authUser: { id: '1', name: 'testUser' } } })

async function wait(ms = 0) {
    await act(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms)
        })
    })
}

test('HomePage renders watchlist from the graphql endpoint', async () => {
    const mocks = [
        {
            request: {
                query: GET_WATCHLIST_QUERY,
            },
            result: {
                data: {
                    getWatchList: mockWatchList,
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

    const linkElement = getAllByText(/AAPL/i)
    expect(linkElement[0]).toBeInTheDocument()
})
