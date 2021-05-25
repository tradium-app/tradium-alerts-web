import { useField } from 'formik'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const TagSelect = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    const { options } = props
    // const { touched, error, value } = meta
    const { setValue } = helpers

    return (
        <Select
            instanceId={props.id}
            options={options}
            name={field.name}
            placeholder="Select tags..."
            isMulti={true}
            classNamePrefix="select2-selection"
            closeMenuOnSelect={true}
            defaultMenuIsOpen={false}
            components={makeAnimated({ DropdownIndicator: () => null, IndicatorSeparator: () => null })}
            onChange={(option) => setValue(option.value)}
        />
    )
}

export default TagSelect
