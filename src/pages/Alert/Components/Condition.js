import React from 'react'
import { Col, Row } from 'reactstrap'
import ConditionValueSelect from './ConditionValueSelect'
import IndicatorValues from './IndicatorValues'

const Condition = ({ condition, index, removeOption, totalOptions, addOption, handleChange, handleBlur }) => {
    const isLastOption = index === totalOptions - 1

    return (
        <Row className="mb-4">
            <Col xl="4" lg="4" sm="4">
                <select
                    name={`conditions.${index}.indicator`}
                    value={condition.indicator}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">--Please Select--</option>
                    {IndicatorValues.map(({ name, text }) => (
                        <option key={name} value={name}>
                            {text}
                        </option>
                    ))}
                </select>
            </Col>
            <Col xl="3" lg="3" sm="3">
                <select
                    name={`conditions.${index}.timeframe`}
                    value={condition.timeframe}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="Daily">Daily</option>
                </select>
            </Col>
            <Col xl="4" lg="4" sm="4">
                <ConditionValueSelect
                    indicator={condition.indicator}
                    value={`conditions.${index}.value`}
                    valueText={`conditions.${index}.valueText`}
                    valueConfig={`conditions.${index}.valueConfig`}
                />
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

export default Condition
