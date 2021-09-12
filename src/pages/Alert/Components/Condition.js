import React from 'react'
import { Col, Row } from 'reactstrap'

const Condition = ({ condition, index, removeOption, isLastOption, addOption, handleChange, handleBlur }) => {
    return (
        <Row className="mb-4">
            <Col xl="4" lg="4" sm="4">
                <select id="indicator" name="indicator" className="form-control">
                    <option value="">--Please Select--</option>
                    <option value="AE">RSI</option>
                    <option value="VI">MACD</option>
                </select>
            </Col>
            <Col xl="3" lg="3" sm="3">
                <select id="timeframe" name="timeframe" className="form-control">
                    <option value="AE">Daily</option>
                </select>
            </Col>
            <Col xl="4" lg="4" sm="4">
                <select id="value" name="value" className="form-control">
                    <option value="">--Please Select--</option>
                    <option value="AE">Overbought (60)</option>
                    <option value="AE">Overbought (70)</option>
                    <option value="AE">Overbought (80)</option>
                    <option value="AE">Overbought (90)</option>
                    <option value="AE">OverSold (40)</option>
                    <option value="AE">OverSold (30)</option>
                    <option value="AE">OverSold (20)</option>
                    <option value="AE">OverSold (10)</option>
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
