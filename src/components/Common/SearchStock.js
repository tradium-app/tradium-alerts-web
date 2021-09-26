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

export const SearchStock = ({ handleSelect, className }) => {
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            color: 'black',
        }),

        control: (_, { selectProps: { width } }) => ({
            width: width,
        }),

        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1
            const transition = 'opacity 300ms'

            return { ...provided, opacity, transition, color: 'white' }
        },
    }

    return (
        <AsyncSelect
            loadOptions={promiseOptions}
            placeholder="Search Stocks..."
            isClearable
            onChange={handleSelect}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
                ClearIndicator: () => null,
            }}
            width="200px"
            className={className}
            styles={customStyles}
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
