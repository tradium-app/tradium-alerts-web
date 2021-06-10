import React from 'react'

import { FormGroup, Col, Input } from 'reactstrap'

const OptionInput = ({ option, index, removeOption, isLastOption, addOption, handleChange, handleBlur }) => {
    return (
        <FormGroup className="mb-4" row>
            <Col md="10" xs="10">
                <Input
                    type="text"
                    name={`options.${index}.text`}
                    value={option.text}
                    placeholder={'Option ' + (index + 1)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    autoComplete="off"
                />
            </Col>
            <Col md="2" xs="2">
                {!isLastOption && (
                    <button type="button" className="inner btn btn-secondary" onClick={() => removeOption(option.order)}>
                        <i className="bx bx-trash"></i>
                    </button>
                )}
                {isLastOption && (
                    <button type="button" className="inner btn btn-secondary" onClick={addOption}>
                        <i className="bx bx-plus"></i>
                    </button>
                )}
            </Col>
        </FormGroup>
    )
}

export default OptionInput
