import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Col,
    Input,
    Button,
    FormFeedback,
    Label,
    TabPane,
    Row,
    NavItem,
    NavLink,
    TabContent,
} from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

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

    const [activeTab, setactiveTab] = useState(1)
    const [activeTabProgress, setactiveTabProgress] = useState(1)
    const [progressValue, setprogressValue] = useState(25)

    function toggleTab(tab) {
        if (activeTab !== tab) {
            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab)
            }
        }
    }

    function toggleTabProgress(tab) {
        if (activeTabProgress !== tab) {
            if (tab >= 1 && tab <= 4) {
                setactiveTabProgress(tab)

                if (tab === 1) {
                    setprogressValue(25)
                }
                if (tab === 2) {
                    setprogressValue(50)
                }
                if (tab === 3) {
                    setprogressValue(75)
                }
                if (tab === 4) {
                    setprogressValue(100)
                }
            }
        }
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} tabIndex="-1" toggle={toggle} size="lg">
            <div className="modal-content twitter-bs-wizard">
                <ModalHeader toggle={toggle}>Add an Alert for a Stock</ModalHeader>
                <ModalBody>
                    <Formik initialValues={initialValues} validate={validatePoll} onSubmit={handleFormikSubmit}>
                        {({ handleSubmit, handleChange, handleBlur, isSubmitting, touched, values, setValues, errors, handleReset }) => (
                            <form onSubmit={handleSubmit} className="justify-content-center wizard-card">
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
                                                <span className="step-number mr-2">04</span>
                                                Set Notifications
                                            </NavLink>
                                        </NavItem>
                                    </ul>
                                    <TabContent activeTab={activeTab} className="twitter-bs-wizard-tab-content">
                                        <TabPane tabId={1}>
                                            <Form>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-firstname-input1">First name</Label>
                                                            <Input type="text" className="form-control" id="basicpill-firstname-input1" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-lastname-input2">Last name</Label>
                                                            <Input type="text" className="form-control" id="basicpill-lastname-input2" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-phoneno-input3">Phone</Label>
                                                            <Input type="text" className="form-control" id="basicpill-phoneno-input3" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <Label for="basicpill-email-input4">Email</Label>
                                                            <Input type="email" className="form-control" id="basicpill-email-input4" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="12">
                                                        <FormGroup>
                                                            <Label for="basicpill-address-input1">Address</Label>
                                                            <textarea id="basicpill-address-input1" className="form-control" rows="2"></textarea>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>
                                        <TabPane tabId={2}>
                                            <div>
                                                <Form>
                                                    <Row>
                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <Label for="basicpill-pancard-input5">PAN Card</Label>
                                                                <Input type="text" className="form-control" id="basicpill-pancard-input5" />
                                                            </FormGroup>
                                                        </Col>

                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <Label for="basicpill-vatno-input6">VAT/TIN No.</Label>
                                                                <Input type="text" className="form-control" id="basicpill-vatno-input6" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <Label for="basicpill-cstno-input7">CST No.</Label>
                                                                <Input type="text" className="form-control" id="basicpill-cstno-input7" />
                                                            </FormGroup>
                                                        </Col>

                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <Label for="basicpill-servicetax-input8">Service Tax No.</Label>
                                                                <Input type="text" className="form-control" id="basicpill-servicetax-input8" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <Label for="basicpill-companyuin-input9">Company UIN</Label>
                                                                <Input type="text" className="form-control" id="basicpill-companyuin-input9" />
                                                            </FormGroup>
                                                        </Col>

                                                        <Col lg="6">
                                                            <FormGroup>
                                                                <Label for="basicpill-declaration-input10">Declaration</Label>
                                                                <Input type="text" className="form-control" id="basicpill-Declaration-input10" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </TabPane>
                                        <TabPane tabId={3}>
                                            <div className="row justify-content-center">
                                                <Col lg="6">
                                                    <div className="text-center">
                                                        <div className="mb-4">
                                                            <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                        </div>
                                                        <div>
                                                            <h5>Confirm Detail</h5>
                                                            <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
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
                                        <li className={activeTab === 3 ? 'next disabled' : 'next'}>
                                            <Link
                                                to="#"
                                                onClick={() => {
                                                    toggleTab(activeTab + 1)
                                                }}
                                            >
                                                Next
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        )}
                    </Formik>
                </ModalBody>
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
