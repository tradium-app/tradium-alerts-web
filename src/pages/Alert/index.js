import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link, useParams, withRouter } from 'react-router-dom'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Form, Button, NavItem, NavLink, Container, Row, Col, CardBody, Card, Label, Input, CardTitle as h4, CardFooter as div } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import Indicator from './Components/indicator'
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
                            <h4 className="mb-5">Configure Alert for {symbol} stock</h4>
                            <Container>
                                <Formik initialValues={initialValues} validate={validateAlert} onSubmit={handleFormikSubmit}>
                                    {({ handleSubmit, handleChange, handleBlur, isSubmitting, touched, values, setValues, errors, handleReset }) => (
                                        <Form onSubmit={handleSubmit} className="justify-content-center wizard-card">
                                            <Row className="mb-4">
                                                <Col sm="2">
                                                    <Label htmlFor="title" className="col-form-label">
                                                        Title
                                                    </Label>
                                                </Col>
                                                <Col sm="4">
                                                    <Input id="title" type="text" placeholder="e.g. RSI Overbought" autoComplete="off" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xl="4" lg="4" sm="4">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">Indicator</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl="3" lg="3" sm="3">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">TimeFrame</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl="4" lg="4" sm="4">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">Value</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xl="4" lg="4" sm="4">
                                                    <select id="ddlCreditCardType" name="ddlCreditCardType" className="form-control">
                                                        <option value="">--Please Select--</option>
                                                        <option value="AE">RSI</option>
                                                        <option value="VI">MACD</option>
                                                    </select>
                                                </Col>
                                                <Col xl="3" lg="3" sm="3">
                                                    <select id="ddlCreditCardType" name="ddlCreditCardType" className="form-control">
                                                        <option value="AE">Daily</option>
                                                    </select>
                                                </Col>
                                                <Col xl="4" lg="4" sm="4">
                                                    <select id="ddlCreditCardType" name="ddlCreditCardType" className="form-control">
                                                        <option value="">--Please Select--</option>
                                                        <option value="AE">Overbought (60)</option>
                                                        <option value="AE">Overbought (70)</option>
                                                        <option value="AE">Overbought (80)</option>
                                                        <option value="AE">Overbought (90)</option>
                                                        <option value="AE">OverSold (40)</option>
                                                        <option value="AE">OverSold (30)</option>
                                                        <option value="AE">OverSold (20)</option>
                                                        <option value="AE">OverSold (10)</option>
                                                    </select>
                                                </Col>
                                                <Col xl="1" lg="1" sm="1" className="d-flex">
                                                    <button onClick={() => {}} type="button" className="btn btn-lg">
                                                        <i className="bx bx-cog"></i>
                                                    </button>
                                                    <button onClick={() => {}} type="button" className="btn btn-lg">
                                                        <i className="bx bx-plus"></i>
                                                    </button>
                                                </Col>
                                            </Row>

                                            <div className="d-flex justify-content-end button-items border-top">
                                                <Link to={`/symbol/${symbol.toUpperCase()}`} className="btn waves-effect waves-light">
                                                    Cancel
                                                </Link>
                                                <Button type="submit" onClick={() => setValues(values)} color="primary" disabled={isSubmitting}>
                                                    {'Save Alert'}
                                                </Button>
                                            </div>
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
