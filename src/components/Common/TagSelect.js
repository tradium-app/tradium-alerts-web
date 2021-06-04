import { useState } from 'react'
import useDebouncedEffect from 'use-debounced-effect-hook'
import { useField } from 'formik'
import CreatableSelect from 'react-select/creatable'
import { useLazyQuery } from '@apollo/client'
import gql from 'graphql-tag'

const TagSelect = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    // const { touched, error, value } = meta
    const { setValue } = helpers
    const [searchText, setSearchText] = useState('')

    const [getTopTags, { loading, data, refetch, error, called }] = useLazyQuery(GET_TOP_TAGS_QUERY)

    useDebouncedEffect(() => getTopTags({ variables: { searchText: searchText } }), [searchText], 1000)

    return (
        <CreatableSelect
            id={props.id}
            name={field.name}
            options={data?.getTopTags.map((t) => ({ label: t.tagId, value: t.tagId }))}
            onInputChange={(newValue) => setSearchText(newValue)}
            onChange={(option) => {
                setValue(option.map((o) => o.value))
            }}
            placeholder="Select tags..."
            isLoading={loading}
            isMulti
            isClearable
            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        />
    )
}

export const GET_TOP_TAGS_QUERY = gql`
    query getTopTags($searchText: String) {
        getTopTags(searchText: $searchText) {
            tagId
            currentMonthCount
        }
    }
`

export default TagSelect
