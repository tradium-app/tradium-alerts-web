import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Button, FormFeedback, Label } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import TagSelect from './TagSelect'
import OptionInput from './option-input'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const CreatePollModal = ({ poll, isShowing, toggle }) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const [createPollMutate] = useMutation(CREATE_POLL_QUERY, {
        onError: setError,
        onCompleted: setData,
    })

    const [updatePollMutate] = useMutation(UPDATE_POLL_QUERY, {
        onError: setError,
        onCompleted: setData,
    })

    const initialValues = {
        _id: poll?._id || null,
        question: poll?.question || '',
        options: poll?.options.map((o) => ({ _id: o._id, text: o.text, order: o.order })) || [
            { text: '', order: 1 },
            { text: '', order: 2 },
        ],
        tags: poll?.tags || null,
        status: poll?.status || 'Draft',
    }

    if (error) {
        toastr.error(error.message)
        setError(null)
    }

    if (data) {
        if (data.createPoll?.success) {
            toastr.success('Poll Created.')
        } else if (data.updatePoll?.success) {
            toastr.success('Poll Updated.')
        }
        setData(null)
    }

    const handleFormikSubmit = async (values, formikBag) => {
        if (!values._id) {
            await createPollMutate({
                variables: {
                    pollInput: values,
                },
            })
        } else {
            await updatePollMutate({
                variables: {
                    pollInput: values,
                },
            })
        }

        formikBag.resetForm()
        toggle()
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} tabIndex="-1" toggle={toggle}>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create a Poll</ModalHeader>
                <Formik initialValues={initialValues} validate={validatePoll} onSubmit={handleFormikSubmit}>
                    {({ handleSubmit, handleChange, handleBlur, isSubmitting, touched, values, setValues, errors, handleReset }) => (
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
                                    .slice()
                                    .sort((a, b) => a - b)
                                    .map((option, index) => (
                                        <OptionInput
                                            option={option}
                                            index={index}
                                            removeOption={(order) => removeOption(values, setValues, order)}
                                            addOption={() => addOption(values, setValues)}
                                            key={index}
                                            isLastOption={index === values.options.length - 1}
                                            handleChange={handleChange}
                                            handleBlur={handleBlur}
                                        />
                                    ))}
                                {errors && errors.options && touched.options && <div className="invalid-feedback d-block">{errors.options}</div>}
                                <FormGroup className="mb-4 justify-content-center" row>
                                    <Col xl="12" md="12">
                                        <Label htmlFor="tags">Tags</Label>
                                        <div className="templating-select select2-container">
                                            <TagSelect id="tags" name="tags" value={values.tags} />
                                        </div>
                                    </Col>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    type="button"
                                    color="secondary"
                                    onClick={handleReset}
                                    disabled={isSubmitting || !touched || Object.keys(touched).length === 0}
                                >
                                    Reset
                                </Button>
                                <Button
                                    type="submit"
                                    onClick={() => {
                                        setValues({ ...values, status: 'Published' })
                                    }}
                                    color="primary"
                                    disabled={isSubmitting}
                                >
                                    {'Save & Publish'}
                                </Button>
                                <Button
                                    type="submit"
                                    onClick={() => {
                                        setValues({ ...values, status: 'Draft' })
                                    }}
                                    color="primary"
                                    disabled={isSubmitting}
                                >
                                    Save Draft
                                </Button>
                            </ModalFooter>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    ) : null
}

const addOption = (values, setValues) => {
    const options = [...values.options]
    const lastOrder = options[options.length - 1].order
    options.push({ text: '', order: lastOrder + 1 })
    setValues({ ...values, options })
}

const removeOption = (values, setValues, order) => {
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

const validatePoll = (values) => {
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

export const CREATE_POLL_QUERY = gql`
    mutation createPoll($pollInput: PollInput!) {
        createPoll(pollInput: $pollInput) {
            success
            message
        }
    }
`

export const UPDATE_POLL_QUERY = gql`
    mutation updatePoll($pollInput: PollInput!) {
        updatePoll(pollInput: $pollInput) {
            success
            message
        }
    }
`

export default CreatePollModal
