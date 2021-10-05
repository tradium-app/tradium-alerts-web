import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link, useParams, withRouter, Redirect } from 'react-router-dom'
import gql from 'graphql-tag'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Form, Button, NavItem, NavLink, Container, Row, Col, CardBody, Card, Label, Input, CardTitle as h4, CardFooter as div } from 'reactstrap'
import { Formik } from 'formik'
import toastr from 'toastr'
import Condition from './Components/Condition'
import { GET_ALERTS } from '../Stock/Stock'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const AlertPage = ({ authUser }) => {
    let { symbol, alertId } = useParams()
    const isAddMode = !alertId

    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const [addAlertMutate] = useMutation(ADD_ALERT_MUTATION, {
        onError: setError,
        onCompleted: setData,
    })

    const [updateAlertMutate] = useMutation(UPDATE_ALERT_MUTATION, {
        onError: setError,
        onCompleted: setData,
    })

    const [getAlerts, { loading, data: initialAlertData }] = useLazyQuery(GET_ALERTS, {
        variables: { symbol },
    })

    useEffect(() => {
        if (!isAddMode) {
            getAlerts({ variables: { symbol } })
        }
    }, [getAlerts, isAddMode, symbol])

    const initialAlert = initialAlertData?.getAlerts?.find((a) => a.id == alertId)

    const initialValues = {
        id: alertId || null,
        symbol,
        title: initialAlert?.title || '',
        conditions: initialAlert?.conditions || [{ timeframe: 'daily', order: 1 }],
    }

    if (error) {
        toastr.error(error.message)
        setError(null)
    }

    if (data) {
        if (data.addAlert?.success) {
            toastr.success(`Alert Created for ${data.addAlert.alert.symbol}`)
            return <Redirect to={`/symbol/${symbol}/alert/${data.addAlert.alert.id}`} />
        } else if (data.updateAlert?.success) {
            toastr.success('Alert Updated.')
        }
        setData(null)
    }

    const handleFormikSubmit = async (values) => {
        if (isAddMode) {
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
    }

    const addOption = (values, setValues) => {
        const conditions = [...values.conditions]
        const lastOrder = conditions[conditions.length - 1].order
        conditions.push({ timeframe: 'daily', order: lastOrder + 1 })
        setValues({ ...values, conditions: conditions })
    }

    const removeOption = (values, setValues, order) => {
        const newConditions = values.conditions
            .filter((o) => o.order !== order)
            .map((option) => {
                if (option.order > order) {
                    return { ...option, order: option.order - 1 }
                } else {
                    return option
                }
            })

        setValues({ ...values, conditions: newConditions })
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
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initialValues}
                                    validate={validateAlert}
                                    onSubmit={handleFormikSubmit}
                                    validateOnChange={false}
                                    validateOnBlur={false}
                                >
                                    {({ handleSubmit, handleChange, handleBlur, isSubmitting, touched, values, setValues, errors, handleReset }) => (
                                        <Form onSubmit={handleSubmit} className="justify-content-center wizard-card">
                                            <Row className="mb-4">
                                                <Col sm="2">
                                                    <Label htmlFor="title" className="col-form-label">
                                                        Title
                                                    </Label>
                                                </Col>
                                                <Col sm="4">
                                                    <Input
                                                        name="title"
                                                        type="text"
                                                        value={values?.title}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        placeholder="e.g. RSI Overbought"
                                                        autoComplete="off"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="mb-2">
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
                                            {values.conditions
                                                .slice()
                                                .sort((a, b) => a - b)
                                                .map((condition, index) => (
                                                    <Condition
                                                        condition={condition}
                                                        index={index}
                                                        removeOption={(order) => removeOption(values, setValues, order)}
                                                        addOption={() => addOption(values, setValues)}
                                                        key={index}
                                                        totalOptions={values.conditions.length}
                                                        handleChange={handleChange}
                                                        handleBlur={handleBlur}
                                                    />
                                                ))}

                                            <div className="d-flex justify-content-end button-items border-top">
                                                <Link to={`/symbol/${symbol.toUpperCase()}`} className="btn waves-effect waves-light">
                                                    {'Cancel'}
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
    if (!values.title) {
        errors.title = 'Alert title is empty.'
    }

    values.conditions.forEach((condition) => {
        if (!condition.indicator || !condition.timeframe || !condition.value) {
            errors.indicator = 'Alert condition not properly set.'
        }
    })

    !!Object.keys(errors).length && toastr.error(Object.values(errors).join('</br>'))
    return errors
}

export const ADD_ALERT_MUTATION = gql`
    mutation addAlert($alertInput: AlertInput!) {
        addAlert(alertInput: $alertInput) {
            success
            message
            alert {
                id
                symbol
            }
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
