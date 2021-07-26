import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const RsiConfig = () => {
    return (
        <>
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label>TimeFrame</Label>
                </Col>
                <Col sm="3">
                    <input id="time1" name="radioTime" type="radio" value="vertical" className="mr-2" />
                    <Label htmlFor="time1">Daily</Label>
                </Col>
                <Col sm="3">
                    <input id="time2" name="radioTime" type="radio" value="vertical" className="mr-2" />
                    <Label htmlFor="time2">Hourly</Label>
                </Col>
                <Col sm="1"></Col>
            </Row>
            <Row className="mb-4">
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
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label htmlFor="linkedinLink" className="col-form-label">
                        Target Range
                    </Label>
                </Col>
                <Col sm="6">
                    <Row>
                        <Col sm="2" className="text-right">
                            <Label htmlFor="linkedinLink" className="col-form-label">
                                From:
                            </Label>
                        </Col>
                        <Col sm="4">
                            <Input type="text" placeholder="80" autoComplete="off" />
                        </Col>
                        <Col sm="2" className="text-right">
                            <Label htmlFor="linkedinLink" className="col-form-label">
                                To:
                            </Label>
                        </Col>
                        <Col sm="4">
                            <Input type="text" placeholder="80" autoComplete="off" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label htmlFor="title" className="col-form-label">
                        Title
                    </Label>
                </Col>
                <Col sm="6">
                    <Input id="title" type="text" placeholder="e.g. RSI Overbought" />
                </Col>
            </Row>
        </>
    )
}

export default RsiConfig
