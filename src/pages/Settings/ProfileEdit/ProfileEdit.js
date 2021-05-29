import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap'
import { useFormik } from 'formik'
import toastr from 'toastr'
import { fetchProfile } from '../../../store/actions'

const ProfileEdit = ({ authUser, profile, fetchProfile }) => {
    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(null)

    const [updateProfileMutate] = useMutation(UPDATE_PROFILE_MUTATION, {
        onError: setError,
        onCompleted: setData,
    })

    if (error) {
        toastr.error(error.message)
        setError(null)
    }

    if (data) {
        if (data.updateProfile.success) {
            toastr.success('Profile successfully updated.')
        } else {
            toastr.error('Profile update failed.')
        }

        setData(null)
    }

    function validate(values) {
        const errors = {}
        if (!values.title) {
            errors.title = 'Title required.'
        }

        return errors
    }

    const initialValues = {
        title: profile?.title,
        shortBio: profile?.shortBio,
        githubLink: profile?.githubLink,
        linkedinLink: profile?.linkedinLink,
        stackOverflowLink: profile?.stackOverflowLink,
    }

    const { values, handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues,
        enableReinitialize: true,
        validate,
        onSubmit: (values) => {
            updateProfileMutate({
                variables: {
                    userInput: values,
                },
            })
        },
    })

    useEffect(() => {
        if (authUser || localStorage.getItem('authUser')) {
            fetchProfile()
        }
    }, [fetchProfile, authUser])

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit} className="justify-content-center">
                <Row className="justify-content-center">
                    <Col lg="10">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">General Info</CardTitle>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="title" md="3" className="col-form-label">
                                        One sentence describing you *
                                    </Label>
                                    <Col md="9">
                                        <Input
                                            id="title"
                                            value={values?.title || ''}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                            autoComplete="off"
                                            invalid={!!(touched.title && errors.title)}
                                        />
                                        <span className="font-13 text-muted">e.g "Senior front-end developer with 5+ years of experience"</span>
                                    </Col>
                                </FormGroup>

                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="billing-email-address" md="3" className="col-form-label">
                                        Short bio
                                    </Label>
                                    <Col md="9">
                                        <textarea
                                            id="shortBio"
                                            value={values?.shortBio || ''}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-control"
                                            rows="2"
                                        ></textarea>
                                        <span className="font-13 text-muted">e.g "A short greeting to visitors"</span>
                                    </Col>
                                </FormGroup>

                                <CardTitle className="mb-4">Social</CardTitle>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="githubLink" md="3" className="col-form-label">
                                        Github
                                    </Label>
                                    <Col md="5">
                                        <Input
                                            id="githubLink"
                                            value={values?.githubLink || 'https://github.com/'}
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-control"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="linkedinLink" md="3" className="col-form-label">
                                        LinkedIn
                                    </Label>
                                    <Col md="5">
                                        <Input
                                            id="linkedinLink"
                                            value={values?.linkedinLink || 'https://www.linkedin.com/'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup className="mb-4" row>
                                    <Label htmlFor="stackOverflowLink" md="3" className="col-form-label">
                                        Stack Overflow
                                    </Label>
                                    <Col md="5">
                                        <Input
                                            id="stackOverflowLink"
                                            value={values?.stackOverflowLink || 'https://stackoverflow.com/'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Row className="my-4">
                            <Col>
                                <div className="text-sm-right">
                                    <button type="submit" className="btn btn-primary waves-effect waves-light">
                                        <i className="bx bx-save font-size-16 align-middle mr-2"></i> Update
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    )
}

export const UPDATE_PROFILE_MUTATION = gql`
    mutation updateProfile($userInput: UserInput!) {
        updateProfile(userInput: $userInput) {
            success
            message
        }
    }
`
const mapStateToProps = (state) => {
    return {
        authUser: state.Login.authUser,
        profile: state.Profile.profile,
    }
}

export default withRouter(connect(mapStateToProps, { fetchProfile })(ProfileEdit))
