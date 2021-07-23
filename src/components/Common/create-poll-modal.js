import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Button, FormFeedback, Label } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import ReactWizard from 'react-bootstrap-wizard'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const FirstStep = React.forwardRef((props, ref) => {
    const [randomState, setRandomState] = React.useState('1. This is a random state for first step.')
    React.useImperativeHandle(ref, () => ({
        isValidated: undefined,
        state: {
            randomState,
        },
    }))
    return <div>Hey from First</div>
})

const SecondStep = React.forwardRef((props, ref) => {
    const [randomState, setRandomState] = React.useState('2. This is a random state for second step.')
    const isValidated = () => {
        // do some validations
        // decide if you will
        return true
        // or you will
        // return false;
    }
    React.useImperativeHandle(ref, () => ({
        isValidated: () => {
            return isValidated()
        },
        state: {
            randomState,
        },
    }))
    return <div>Hey from Second</div>
})

const ThirdStep = React.forwardRef((props, ref) => {
    const [randomState, setRandomState] = React.useState('3. This is a random state for third step.')
    React.useImperativeHandle(ref, () => ({
        isValidated: undefined,
        state: {
            randomState,
        },
    }))
    return <div>Hey from Third</div>
})

var steps = [
    // this step hasn't got a isValidated() function, so it will be considered to be true
    { stepName: 'Select Alert Type', component: FirstStep },
    // this step will be validated to false
    { stepName: 'Second', component: SecondStep },
    // this step will never be reachable because of the seconds isValidated() steps function that will always return false
    { stepName: 'Third', component: ThirdStep },
]

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

    const finishButtonClick = (allStates) => {
        console.log(allStates)
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} tabIndex="-1" toggle={toggle} size="lg">
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Add an Alert for a Stock</ModalHeader>
                <Formik initialValues={initialValues} validate={validatePoll} onSubmit={handleFormikSubmit}>
                    {({ handleSubmit, handleChange, handleBlur, isSubmitting, touched, values, setValues, errors, handleReset }) => (
                        <form onSubmit={handleSubmit} className="justify-content-center">
                            <ReactWizard steps={steps} navSteps headerTextCenter validate color="primary" finishButtonClick={finishButtonClick} />
                        </form>
                    )}
                </Formik>
            </div>
        </Modal>
    ) : null
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
