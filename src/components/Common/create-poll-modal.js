import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Button, FormFeedback } from 'reactstrap'
import { useFormik } from 'formik'
import toastr from 'toastr'

toastr.options = {
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const CreatePollModal = ({ isShowing, toggle }) => {
    const [options, setOptions] = useState([
        { text: '', order: 1 },
        { text: '', order: 2 },
    ])

    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(null)
    const [createPollMutate] = useMutation(CREATE_POLL_QUERY, {
        onError: setError,
        onCompleted: setData,
    })

    const createPoll = (pollInput) => {
        createPollMutate({
            variables: {
                pollInput,
            },
        })
    }

    const addOption = () => {
        setOptions([...options, { text: '', order: options.length + 1 }])
    }

    const setOption = (order, value) => {
        options.find((o) => o.order === order).text = value
    }

    const removeOption = (order) => {
        const newOptions = options
            .filter((o) => o.order !== order)
            .map((option) => {
                if (option.order > order) {
                    return { ...option, order: option.order - 1 }
                } else {
                    return option
                }
            })

        setOptions(newOptions)
    }

    if (error) {
        toastr.error(error)
        setError(null)
    }

    if (data) {
        toastr.success('Poll Created.')
        setData(null)
    }

    function validate(values) {
        const errors = {}
        if (!values.question) {
            errors.question = 'Question required.'
        }
        if (values.question.trim().split(' ').length < 4) {
            errors.question = 'Too few words.'
        }
        if (values.question.indexOf('?') === -1) {
            errors.question = 'Question missing.'
        }

        if (!(values?.options?.filter((o) => o.text).length > 1)) {
            errors.options = 'At least two options are required.'
        }

        let optionSet = new Set()
        values?.options.forEach((option) => optionSet.add(option.text))

        if (optionSet.size < values?.options.length) {
            errors.options = 'Please remove duplicate options.'
        }

        return errors
    }

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values, // use this if you want controlled components
        errors,
    } = useFormik({
        initialValues: {
            question: '',
            options,
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values))
            createPoll(values)
        },
    })

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle}>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create a Poll</ModalHeader>
                <Form onSubmit={handleSubmit} className="justify-content-center">
                    <ModalBody>
                        <FormGroup className="mb-4 justify-content-center" row>
                            <Col xl="12" md="12">
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="textarea"
                                    className="form-control"
                                    id="question"
                                    placeholder="Start with a Question"
                                    rows="3"
                                    invalid={!!(touched.question && errors.question)}
                                />
                                <FormFeedback>{errors.question}</FormFeedback>
                            </Col>
                        </FormGroup>
                        {options
                            .sort((a, b) => a - b)
                            .map((option) => (
                                <OptionInput
                                    option={option}
                                    setOption={setOption}
                                    removeOption={removeOption}
                                    addOption={addOption}
                                    key={option.order}
                                    isLastOption={option.order === options.length}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                            ))}
                        {errors && errors.options && touched.options && <div className="invalid-feedback d-block">{errors.options}</div>}
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" color="secondary">
                            Reset
                        </Button>
                        <Button type="submit" color="primary">
                            Publish the Poll
                        </Button>
                    </ModalFooter>
                </Form>
            </div>
        </Modal>
    ) : null
}

const OptionInput = ({ option, setOption, removeOption, isLastOption, addOption, handleChange, handleBlur }) => {
    return (
        <FormGroup className="mb-4" row>
            <Col md="10" xs="10">
                <Input
                    type="text"
                    key={option.order}
                    id={'Option-' + option.order}
                    placeholder={'Option ' + option.order}
                    onChange={(event) => {
                        setOption(option.order, event.target.value)
                        handleChange(event.target.value)
                    }}
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

export const CREATE_POLL_QUERY = gql`
    mutation createPoll($pollInput: PollInput!) {
        createPoll(pollInput: $pollInput) {
            success
            message
        }
    }
`

export default CreatePollModal
