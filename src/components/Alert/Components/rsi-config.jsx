import React from 'react'
import { Col, Label, Row } from 'reactstrap'

const RsiConfig = () => {
    return (
        <>
            <Row className="mb-2">
                <Col sm="1"></Col>
                <Col sm="5">
                    <Label htmlFor="linkedinLink" className="col-form-label">
                        Signal (OverBought / OverSold)
                    </Label>
                </Col>
                <Col sm="5">
                    <select className="custom-select">
                        <option defaultValue>OverBought</option>
                        <option value="1">OverSold</option>
                        <option value="2">Custom</option>
                    </select>
                </Col>
                <Col sm="1"></Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="5">
                    <Label htmlFor="linkedinLink" className="col-form-label">
                        Value
                    </Label>
                </Col>
                <Col sm="5">
                    <input className="form-control" type="text" defaultValue="80" />
                </Col>
                <Col sm="1"></Col>
            </Row>
        </>
    )
}

export default RsiConfig
