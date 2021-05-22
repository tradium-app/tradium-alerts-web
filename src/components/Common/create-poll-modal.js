import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Button, FormFeedback } from 'reactstrap'
import { useFormik } from 'formik'
import toastr from 'toastr'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const CreatePollModal = ({ isShowing, toggle }) => {
    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(null)
    const [createPollMutate] = useMutation(CREATE_POLL_QUERY, {
        onError: setError,
        onCompleted: setData,
    })

    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values, // use this if you want controlled components
        setValues,
        errors,
    } = useFormik({
        initialValues: {
            question: '',
            options: [
                { text: '', order: 1 },
                { text: '', order: 2 },
            ],
        },
        validate,
        onSubmit: (values) => {
            createPoll(values)
        },
    })

    const createPoll = (pollInput) => {
        createPollMutate({
            variables: {
                pollInput,
            },
        })
    }

    const addOption = () => {
        const options = [...values.options]
        const lastOrder = options[options.length - 1].order
        options.push({ text: '', order: lastOrder + 1 })
        setValues({ ...values, options })
    }

    const removeOption = (order) => {
        const newOptions = values.options
            .filter((o) => o.order !== order)
            .map((option) => {
                if (option.order > order) {
                    return { ...option, order: option.order - 1 }
                } else {
                    return option
                }
            })

        setValues({ ...values, options: newOptions })
    }

    if (error) {
        toastr.error(error.message)
        setError(null)
    }

    if (data) {
        if (data.createPoll.success) {
            toastr.success('Poll Created.')
        }
        setData(null)
    }

    function validate(values) {
        const errors = {}
        if (!values.question) {
            errors.question = 'Question required.'
        } else if (values.question.trim().split(' ').length < 4) {
            errors.question = 'Too few words.'
        } else if (values.question.indexOf('?') === -1) {
            errors.question = 'Question not valid.'
        }

        const nonEmptyOptions = values.options.filter((o) => o.text)
        const optionSet = new Set()
        nonEmptyOptions.forEach((option) => optionSet.add(option.text))

        if (nonEmptyOptions.length < 2) {
            errors.options = 'At least two options are required.'
        } else if (optionSet.size < nonEmptyOptions.length) {
            errors.options = 'Please remove duplicate options.'
        }

        return errors
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle}>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create a Poll</ModalHeader>
                <Form onSubmit={handleSubmit} className="justify-content-center">
                    <ModalBody>
                        <FormGroup className="mb-4 justify-content-center" row>
                            <Col xl="12" md="12">
                                <Input
                                    id="question"
                                    value={values.question}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="textarea"
                                    className="form-control font-size-16"
                                    placeholder="Start with a Question"
                                    rows="3"
                                    invalid={!!(touched.question && errors.question)}
                                />
                                <FormFeedback>{errors.question}</FormFeedback>
                            </Col>
                        </FormGroup>
                        {values.options
                            .sort((a, b) => a - b)
                            .map((option, index) => (
                                <OptionInput
                                    option={option}
                                    index={index}
                                    removeOption={removeOption}
                                    addOption={addOption}
                                    key={index}
                                    isLastOption={index === values.options.length - 1}
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

const OptionInput = ({ option, index, setOption, removeOption, isLastOption, addOption, handleChange, handleBlur }) => {
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

export const CREATE_POLL_QUERY = gql`
    mutation createPoll($pollInput: PollInput!) {
        createPoll(pollInput: $pollInput) {
            success
            message
        }
    }
`

export default CreatePollModal
