import React from 'react'
import { Col, Row } from 'reactstrap'

const Condition = ({ condition, index, removeOption, isLastOption, addOption, handleChange, handleBlur }) => {
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
                    <option value="rsi">RSI</option>
                    <option value="macd">MACD</option>
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
                    <option value="daily">Daily</option>
                </select>
            </Col>
            <Col xl="4" lg="4" sm="4">
                <select
                    name={`conditions.${index}.value`}
                    value={condition.value}
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">--Please Select--</option>
                    <option value="overbought_60">Overbought (60)</option>
                    <option value="overbought_70">Overbought (70)</option>
                    <option value="overbought_80">Overbought (80)</option>
                    <option value="overbought_90">Overbought (90)</option>
                    <option value="oversold_40">OverSold (40)</option>
                    <option value="oversold_30">OverSold (30)</option>
                    <option value="oversold_20">OverSold (20)</option>
                    <option value="oversold_10">OverSold (10)</option>
                </select>
            </Col>
            <Col xl="1" lg="1" sm="1" className="d-flex">
                {!isLastOption && (
                    <button type="button" className="inner btn btn-secondary" onClick={() => removeOption(condition.order)}>
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
