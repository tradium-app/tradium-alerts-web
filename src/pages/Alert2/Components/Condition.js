import React from 'react'
import { Col, Row } from 'reactstrap'
import SecondIndicatorSelect from './SecondIndicatorSelect'
import IndicatorValues from './IndicatorValues'

const Condition = ({ condition, index, removeOption, totalOptions, addOption, handleChange, handleBlur }) => {
    const isLastOption = index === totalOptions - 1

    return (
        <Row className="mb-4">
            <Col xl="1" lg="1" sm="1" className="d-flex"></Col>
            <Col xl="3" lg="3" sm="3">
                <select
                    name={`conditions.${index}.indicator1`}
                    value={condition.indicator1}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">-- Please Select --</option>
                    {IndicatorValues.map(({ name, text }) => (
                        <option key={name} value={name}>
                            {text}
                        </option>
                    ))}
                </select>
            </Col>
            <Col xl="2" lg="2" sm="2">
                <select
                    name={`conditions.${index}.operator`}
                    value={condition.operator}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <OperatorSelectOptions indicator={condition.indicator1} />
                </select>
            </Col>
            <Col xl="3" lg="3" sm="3">
                <SecondIndicatorSelect indicator1={condition.indicator1} valueField={`conditions.${index}.indicator2`} value={condition.indicator2} />
            </Col>
            <Col xl="2" lg="2" sm="2">
                <select
                    name={`conditions.${index}.diff_percent`}
                    value={condition.diff_percent}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <DiffPercentSelectOptions indicator={condition.indicator1} />
                </select>
            </Col>
            <Col xl="1" lg="1" sm="1" className="d-flex">
                {totalOptions > 1 && (
                    <button type="button" className="inner btn btn-secondary mr-2" onClick={() => removeOption(condition.order)}>
                        <i className="bx bx-trash"></i>
                    </button>
                )}
                {isLastOption && (
                    <button type="button" className="inner btn btn-secondary" onClick={addOption}>
                        <i className="bx bx-plus"></i>
                    </button>
                )}
            </Col>
        </Row>
    )
}

const OperatorSelectOptions = ({ indicator }) => {
    const operatorValues = IndicatorValues.find((element) => element.name === indicator)?.operators

    return (
        <>
            {!operatorValues && <option value="">N/A</option>}
            {operatorValues && <option value="">-- Please Select --</option>}
            {operatorValues &&
                operatorValues.map((operator) => (
                    <option key={operator} value={operator}>
                        {operator}
                    </option>
                ))}
        </>
    )
}

const DiffPercentSelectOptions = ({ indicator }) => {
    const diffValues = IndicatorValues.find((element) => element.name === indicator)?.difference_percentage

    return (
        <>
            {!diffValues && <option value="">N/A</option>}
            {diffValues && <option value="">-- Please Select --</option>}
            {diffValues &&
                diffValues.map((diffValue) => (
                    <option key={diffValue} value={diffValue}>
                        {`More than ${diffValue}%`}
                    </option>
                ))}
        </>
    )
}

export default Condition
