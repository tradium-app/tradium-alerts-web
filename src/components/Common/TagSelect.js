import { useField } from 'formik'
import AsyncCreatableSelect from 'react-select/async-creatable'
import makeAnimated from 'react-select/animated'

const TagSelect = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
    const { options } = props
    // const { touched, error, value } = meta
    const { setValue } = helpers

    const filterOptions = (inputValue) => {
        return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()))
    }

    const promiseOptions = (inputValue) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterOptions(inputValue))
            }, 1000)
        })

    return (
        <AsyncCreatableSelect
            id={props.id}
            name={field.name}
            isSearchable
            placeholder="Select tags..."
            isMulti={true}
            closeMenuOnSelect={true}
            defaultMenuIsOpen={false}
            components={makeAnimated({ DropdownIndicator: () => null, IndicatorSeparator: () => null })}
            onChange={(option) => {
                setValue(option.map((o) => o.value))
            }}
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
        />
    )
}

export default TagSelect
