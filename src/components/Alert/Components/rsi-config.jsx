import React, { useState } from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const RsiConfig = ({ values, setValues }) => {
    const [newValues, setNewValues] = useState(values)

    const setValue = (controlValue) => {
        setNewValues({ ...newValues, ...controlValue })
        setValues(newValues, false)
    }

    return (
        <>
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label>TimeFrame</Label>
                </Col>
                <Col sm="6">
                    <input id="time1" name="radioTime" type="radio" className="mr-2" onClick={() => setValue({ timeFrame: 'daily' })} />
                    <Label htmlFor="time1" className="mr-4">
                        Daily
                    </Label>
                    <input id="time2" name="radioTime" type="radio" className="mr-2" onClick={() => setValue({ timeFrame: 'hourly' })} />
                    <Label htmlFor="time2">Hourly</Label>
                </Col>
                <Col sm="1"></Col>
            </Row>
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="4">
                    <Label>Action</Label>
                </Col>
                <Col sm="7">
                    <input id="cross1" name="radioFruit" type="radio" className="mr-2" onClick={() => setValue({ action: 'crossover' })} />
                    <Label htmlFor="cross1" className="mr-4">
                        Cross Over
                    </Label>
                    <input id="cross2" name="radioFruit" type="radio" className="mr-2" onClick={() => setValue({ action: 'crossunder' })} />
                    <Label htmlFor="cross2" className="mr-4">
                        Cross Over
                    </Label>
                    <input id="cross3" name="radioFruit" type="radio" className="mr-2" onClick={() => setValue({ action: 'rangeentry' })} />
                    <Label htmlFor="cross3" className="mr-4">
                        Range Entry
                    </Label>
                    <input id="cross4" name="radioFruit" type="radio" className="mr-2" onClick={() => setValue({ action: 'all' })} />
                    <Label htmlFor="cross4" className="mr-4">
                        All
                    </Label>
                </Col>
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
                            <Input
                                type="text"
                                placeholder="80"
                                autoComplete="off"
                                onChange={(event) => setValue({ targetRange: { from: event.currentTarget.value, to: newValues?.targetRange?.to } })}
                            />
                        </Col>
                        <Col sm="2" className="text-right">
                            <Label htmlFor="linkedinLink" className="col-form-label">
                                To:
                            </Label>
                        </Col>
                        <Col sm="4">
                            <Input
                                type="text"
                                placeholder="80"
                                autoComplete="off"
                                onChange={(event) => setValue({ targetRange: { from: newValues?.targetRange?.from, to: event.currentTarget.value } })}
                            />
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
                    <Input
                        id="title"
                        type="text"
                        placeholder="e.g. RSI Overbought"
                        autoComplete="off"
                        onChange={(event) => setValue({ title: event.currentTarget.value })}
                    />
                </Col>
            </Row>
        </>
    )
}

export default RsiConfig
