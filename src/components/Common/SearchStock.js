import React, { useRef } from 'react'
import gql from 'graphql-tag'
import AsyncSelect from 'react-select/async'
import client from '../../graphql-client'
import { useHotkeys } from 'react-hotkeys-hook'
import debounce from 'lodash.debounce'

const promiseOptions = debounce((inputValue, callback) => {
    client
        .query({
            query: SEARCH_STOCKS_QUERY,
            variables: { searchTerm: inputValue },
        })
        .then((result) => {
            callback(result.data.searchStocks.map((t) => ({ label: t.symbol, value: t.symbol })))
        })
}, 500)

export const SearchStock = ({ handleSelect, className }) => {
    const selectInputRef = useRef(null)
    useHotkeys('/', () => {
        selectInputRef.current.focus()
        selectInputRef.current.value = ''
        console.log('printing selectInputRef.current.value', selectInputRef.current.value)
    })

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            color: 'black',
        }),

        control: (_, { selectProps: { width } }) => ({
            width,
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
            className={className}
            classNamePrefix={'search'}
            styles={customStyles}
            ref={selectInputRef}
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
