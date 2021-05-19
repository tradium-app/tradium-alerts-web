import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Button } from 'reactstrap'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

toastr.options = {
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const CreatePollModal = ({ isShowing, toggle }) => {
    const [createPollMutate, { loading, error, data }] = useMutation(CREATE_POLL_QUERY)
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')

    const createPoll = () => {
        createPollMutate({
            variables: {
                pollInput: {
                    question: question,
                    options: [{ text: option1 }, { text: option2 }],
                },
            },
        })
    }

    if (error) {
        toastr.error(error)
    }

    if (data) {
        toastr.success('Poll Created.')
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle}>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create a Poll</ModalHeader>
                <ModalBody>
                    <Form className="justify-content-center">
                        <FormGroup className="mb-4 justify-content-center" row>
                            <Col xl="12" md="12">
                                <textarea
                                    value={question}
                                    onChange={(event) => {
                                        setQuestion(event.target.value)
                                    }}
                                    type="text"
                                    className="form-control"
                                    id="poll-question"
                                    placeholder="Start with a Question"
                                    rows="3"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                            <Col md="10" xs="10">
                                <Input
                                    type="text"
                                    id="option1"
                                    placeholder="Option 1"
                                    onChange={(event) => {
                                        setOption1(event.target.value)
                                    }}
                                    className="form-control"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                            <Col md="10" xs="10">
                                <Input
                                    type="text"
                                    id="option2"
                                    placeholder="Option 2"
                                    onChange={(event) => {
                                        setOption2(event.target.value)
                                    }}
                                    className="form-control"
                                />
                            </Col>
                            <Col md="2" xs="2">
                                <button type="button" className="inner btn btn-secondary">
                                    {'+'}
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" color="primary" onClick={createPoll}>
                        Publish the Poll
                    </Button>
                </ModalFooter>
            </div>
        </Modal>
    ) : null
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
