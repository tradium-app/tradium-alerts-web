import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link, useParams, withRouter, Redirect } from 'react-router-dom'
import gql from 'graphql-tag'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Form, Button, NavItem, NavLink, Container, Row, Col, CardBody, Card, Label, Input } from 'reactstrap'
import { Formik, Field } from 'formik'
import toastr from '../../toastrCustom'
import Condition from './Components/Condition'
import CopyAlert from './Components/CopyAlert'
import ToggleSwitch from './Components/ToggleSwitch'
import { GET_ALERTS_QUERY } from '../../components/Common/TopbarDropdown/NotificationDropdown'

const AlertPage = () => {
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

    const [getAlerts, { loading, data: initialAlertData }] = useLazyQuery(GET_ALERTS_QUERY, {
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
        signal: initialAlert?.signal || 'Buy',
        title: initialAlert?.title || '',
        conditions: initialAlert?.conditions || [{ order: 1, timeframe: 'daily', isNegative: false }],
        enabled: initialAlert?.enabled == undefined ? true : initialAlert?.enabled,
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
        delete values.status
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
        conditions.push({ timeframe: 'daily', isNegative: false, order: lastOrder + 1 })
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
                                                        Signal
                                                    </Label>
                                                </Col>
                                                <Col sm="4">
                                                    <div className="col-form-label">
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <Field
                                                                type="radio"
                                                                id="radioBuy"
                                                                name="signal"
                                                                className="custom-control-input"
                                                                value="Buy"
                                                            />
                                                            <Label className="custom-control-label" htmlFor="radioBuy">
                                                                Buy
                                                            </Label>
                                                        </div>
                                                        &nbsp;
                                                        <div className="custom-control custom-radio custom-control-inline">
                                                            <Field
                                                                type="radio"
                                                                id="radioSell"
                                                                name="signal"
                                                                className="custom-control-input"
                                                                value="Sell"
                                                            />
                                                            <Label className="custom-control-label" htmlFor="radioSell">
                                                                Sell
                                                            </Label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col sm="6" className="d-flex justify-content-end">
                                                    <ToggleSwitch field="enabled" />
                                                </Col>
                                            </Row>
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
                                                <Col xl="3" lg="3" sm="3">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">Indicator</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl="2" lg="2" sm="2">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">Operator</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl="3" lg="3" sm="3">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">Compare To</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col xl="3" lg="3" sm="3">
                                                    <div id="basic-pills-wizard" className="twitter-bs-wizard mb-2">
                                                        <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                            <NavItem>
                                                                <NavLink className="text-center">Diff. Percentage</NavLink>
                                                            </NavItem>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                            {values.conditions
                                                .sort((a, b) => a.order - b.order)
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
                                                {!isAddMode && <CopyAlert alertId={alertId} isSubmitting={isSubmitting} />}
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
        if (!condition.indicator1) {
            errors.indicator1 = 'Condition Indicator not selected.'
        }
        if (!condition.indicator2 && !condition.value) {
            errors.indicator2 = 'Condition Value not selected.'
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
