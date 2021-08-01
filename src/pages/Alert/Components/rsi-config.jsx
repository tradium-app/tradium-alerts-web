import React, { useEffect, useState } from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const RsiConfig = ({ values, setValues }) => {
    const [newValues, setNewValues] = useState(values)

    useEffect(() => {
        setNewValues(values)
    }, [values])

    const setValue = (controlValue) => {
        setNewValues({ ...newValues, ...controlValue })
        setValues(newValues, false)
    }

    return (
        <>
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="11">
                    <Label>TimeFrame</Label>
                    <div>
                        <input id="time1" name="radioTime" type="radio" className="mr-2" onClick={() => setValue({ timeFrame: 'daily' })} />
                        <Label htmlFor="time1" className="mr-4">
                            Daily
                        </Label>
                        <input id="time2" name="radioTime" type="radio" className="mr-2" onClick={() => setValue({ timeFrame: 'hourly' })} />
                        <Label htmlFor="time2">Hourly</Label>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="11">
                    <Label>Action</Label>
                    <div>
                        <div onClick={() => setValue({ action: 'crossover' })} className="d-inline-block">
                            <input id="cross1" name="radioFruit" type="radio" className="mr-2" />
                            <Label htmlFor="cross1" className="mr-4">
                                Cross Over
                            </Label>
                        </div>
                        <div onClick={() => setValue({ action: 'crossunder' })} className="d-inline-block">
                            <input id="cross2" name="radioFruit" type="radio" className="mr-2" />
                            <Label htmlFor="cross2" className="mr-4">
                                Cross Over
                            </Label>
                        </div>
                        <div onClick={() => setValue({ action: 'rangeentry' })} className="d-inline-block">
                            <input id="cross3" name="radioFruit" type="radio" className="mr-2" />
                            <Label htmlFor="cross3" className="mr-4">
                                Range Entry
                            </Label>
                        </div>
                        <div onClick={() => setValue({ action: 'all' })} className="d-inline-block">
                            <input id="cross4" name="radioFruit" type="radio" className="mr-2" />
                            <Label htmlFor="cross4" className="mr-4">
                                All
                            </Label>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm="1"></Col>
                <Col sm="11">
                    <Label htmlFor="linkedinLink" className="col-form-label">
                        Target Range
                    </Label>
                    <div>
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
                                    onChange={(event) =>
                                        setValue({ targetRange: { from: event.currentTarget.value, to: newValues?.targetRange?.to } })
                                    }
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
                                    onChange={(event) =>
                                        setValue({ targetRange: { from: newValues?.targetRange?.from, to: event.currentTarget.value } })
                                    }
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default RsiConfig
