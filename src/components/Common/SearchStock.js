import React from 'react'
import gql from 'graphql-tag'
import AsyncSelect from 'react-select/async'
import client from '../../graphql-client'

const promiseOptions = (inputValue) => {
    return client
        .query({
            query: SEARCH_STOCKS_QUERY,
            variables: { searchTerm: inputValue },
        })
        .then((result) => {
            return result.data.searchStocks.map((t) => ({ label: t.symbol, value: t.symbol }))
        })
}

export const SearchStock = ({ handleSelect }) => {
    return (
        <AsyncSelect
            loadOptions={promiseOptions}
            placeholder="Search Stocks..."
            isClearable
            onChange={handleSelect}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
            }}
        />
    )
}

export const SEARCH_STOCKS_QUERY = gql`
    query searchStocks($searchTerm: String) {
        searchStocks(searchTerm: $searchTerm) {
            id
            symbol
            company
            price
        }
    }
`

export default SearchStock
