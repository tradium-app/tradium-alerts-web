import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Form, Button, TabPane, NavItem, NavLink, TabContent, Container, Row, Col, CardBody, Card } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import classnames from 'classnames'
import AlertType from './Components/alert-type'
import RsiConfig from './Components/rsi-config'
import ConfirmAlert from './Components/confirm-alert'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const AlertPage = ({ authUser }) => {
    let { symbol } = useParams()

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
        id: alert?.id || null,
        symbol: 'TSLA',
        type: alert?.type,
        action: alert?.action,
        title: alert?.title,
        targetRange: alert?.targetRange,
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
        // toggle()
    }

    function toggleTab(tab) {
        if (activeTab !== tab) {
            if (tab >= 1 && tab <= 3) {
                setactiveTab(tab)
            }
        }
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{symbol + ' | Alert'}</title>
            </Helmet>
            <div className="page-content">
                <Container fluid>
                    <Card>
                        <CardBody>
                            <Container>
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
                                            </div>

                                            <Row>
                                                <Col xl="4" lg="4" sm="4">
                                                    <AlertType
                                                        handleSelect={(type) => {
                                                            toggleTab(activeTab + 1)
                                                            setValues({ ...values, type }, false)
                                                        }}
                                                    />
                                                </Col>
                                                <Col xl="4" lg="4" sm="4">
                                                    <RsiConfig values={values} setValues={setValues} />
                                                </Col>
                                                <Col xl="4" lg="4" sm="4">
                                                    <ConfirmAlert />
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col className="d-flex justify-content-end">
                                                    <div className="mt-3 button-items">
                                                        <Button
                                                            type="submit"
                                                            onClick={() => setValues(values)}
                                                            color="primary"
                                                            disabled={isSubmitting}
                                                        >
                                                            {'Add Alert'}
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    )}
                                </Formik>
                            </Container>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

const validateAlert = (values) => {
    const errors = {}
    if (!values.symbol) {
        errors.symbol = 'Symbol not selected.'
    } else if (!values.type) {
        errors.type = 'Indicator type not selected.'
    } else if (!values.action) {
        errors.action = 'Action type not selected.'
    }

    errors && console.log('printing errors', errors)
    return errors
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

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(AlertPage))
