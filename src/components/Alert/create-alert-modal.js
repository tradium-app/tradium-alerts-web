import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, Form, Button, TabPane, NavItem, NavLink, TabContent } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import AlertType from './Components/alert-type'
import RsiConfig from './Components/rsi-config'
import ConfirmAlert from './Components/confirm-alert'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const CreateAlertModal = ({ poll, isShowing, toggle }) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [activeTab, setactiveTab] = useState(1)

    const [addAlertMutate] = useMutation(ADD_ALERT_MUTATION, {
        onError: setError,
        onCompleted: setData,
    })

    const [updateAlertMutate] = useMutation(UPDATE_ALERT_MUTATION, {
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
            await addAlertMutate({
                variables: {
                    alertInput: values,
                },
            })
        } else {
            await updateAlertMutate({
                variables: {
                    alertInput: values,
                },
            })
        }

        formikBag.resetForm()
        toggle()
    }

    function toggleTab(tab) {
        if (activeTab !== tab) {
            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab)
            }
        }
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} tabIndex="-1" toggle={toggle} size="lg">
            <div className="modal-content twitter-bs-wizard">
                <ModalHeader toggle={toggle}>Add an Alert for a Stock</ModalHeader>
                <ModalBody>
                    <Formik initialValues={initialValues} validate={validateAlert} onSubmit={handleFormikSubmit}>
                        {({ handleSubmit, handleChange, handleBlur, isSubmitting, touched, values, setValues, errors, handleReset }) => (
                            <Form onSubmit={handleSubmit} className="justify-content-center wizard-card">
                                <div id="basic-pills-wizard" className="twitter-bs-wizard">
                                    <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === 1 })}
                                                onClick={() => {
                                                    setactiveTab(1)
                                                }}
                                            >
                                                <span className="step-number mr-2">01</span>
                                                Select Alert Type
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === 2 })}
                                                onClick={() => {
                                                    setactiveTab(2)
                                                }}
                                            >
                                                <span className="step-number mr-2">02</span>
                                                <span>Customize Alert</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === 3 })}
                                                onClick={() => {
                                                    setactiveTab(3)
                                                }}
                                            >
                                                <span className="step-number mr-2">03</span>
                                                Summary
                                            </NavLink>
                                        </NavItem>
                                    </ul>
                                    <TabContent activeTab={activeTab} className="twitter-bs-wizard-tab-content">
                                        <TabPane tabId={1}>
                                            <AlertType
                                                handleSelect={() => {
                                                    toggleTab(activeTab + 1)
                                                }}
                                            />
                                        </TabPane>
                                        <TabPane tabId={2}>
                                            <RsiConfig />
                                        </TabPane>
                                        <TabPane tabId={3}>
                                            <ConfirmAlert />
                                        </TabPane>
                                    </TabContent>

                                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                                        <li className={activeTab === 1 ? 'previous disabled' : 'previous'}>
                                            <Link
                                                to="#"
                                                onClick={() => {
                                                    toggleTab(activeTab - 1)
                                                }}
                                            >
                                                Previous
                                            </Link>
                                        </li>
                                        <li className={'next'}>
                                            {activeTab < 3 ? (
                                                <Button
                                                    onClick={() => {
                                                        toggleTab(activeTab + 1)
                                                    }}
                                                    color="primary"
                                                >
                                                    {'Next'}
                                                </Button>
                                            ) : (
                                                <Button
                                                    type="submit"
                                                    onClick={() => {
                                                        console.log('printing submit')
                                                        setValues({ ...values, status: 'Published' })
                                                    }}
                                                    color="primary"
                                                    disabled={isSubmitting}
                                                >
                                                    {'Add Alert'}
                                                </Button>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </div>
        </Modal>
    ) : null
}

const validateAlert = (values) => {
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

    // return errors
    return {}
}

export const ADD_ALERT_MUTATION = gql`
    mutation addAlert($alertInput: AlertInput!) {
        addAlert(alertInput: $alertInput) {
            success
            message
        }
    }
`

export const UPDATE_ALERT_MUTATION = gql`
    mutation updateAlert($alertInput: AlertInput!) {
        updateAlert(alertInput: $alertInput) {
            success
            message
        }
    }
`

export default CreateAlertModal
