import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const RsiConfig = () => {
    return (
        <>
            <Row className="mb-2">
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label>Action</Label>
                </Col>
                <Col sm="2">
                    <input id="cross1" name="radioFruit" type="radio" value="vertical" className="mr-2" />
                    <Label htmlFor="cross1">Cross Over</Label>
                </Col>
                <Col sm="2">
                    <input id="cross2" name="radioFruit" type="radio" value="vertical" className="mr-2" />
                    <Label htmlFor="cross2">Cross Under</Label>
                </Col>
                <Col sm="2">
                    <input id="cross3" name="radioFruit" type="radio" value="vertical" className="mr-2" />
                    <Label htmlFor="cross3">Both</Label>
                </Col>
                <Col sm="1"></Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label htmlFor="linkedinLink" className="col-form-label">
                        Target Value
                    </Label>
                </Col>
                <Col sm="6">
                    <input className="form-control" type="text" defaultValue="80" />
                </Col>
                <Col sm="1"></Col>
            </Row>
        </>
    )
}

export default RsiConfig
