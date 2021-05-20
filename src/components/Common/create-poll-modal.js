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
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([
        { text: '', order: 1 },
        { text: '', order: 2 },
    ])

    const [error, setError] = React.useState(null)
    const [data, setData] = React.useState(null)
    const [createPollMutate, { loading }] = useMutation(CREATE_POLL_QUERY, {
        onError: setError,
        onCompleted: setData,
    })

    const createPoll = () => {
        createPollMutate({
            variables: {
                pollInput: {
                    question,
                    options,
                },
            },
        })
    }

    const addOption = () => {
        setOptions([...options, { text: '', order: options.length + 1 }])
    }

    const setOption = (order, value) => {
        options.find((o) => o.order === order).text = value
    }

    if (error) {
        toastr.error(error)
        setError(null)
    }

    if (data) {
        toastr.success('Poll Created.')
        setData(null)
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
                        {options
                            .sort((a, b) => a - b)
                            .map((option) => (
                                <OptionInput option={option} setOption={setOption} addOption={addOption} />
                            ))}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" color="secondary" onClick={createPoll}>
                        Reset
                    </Button>
                    <Button type="button" color="primary" onClick={createPoll}>
                        Publish the Poll
                    </Button>
                </ModalFooter>
            </div>
        </Modal>
    ) : null
}

const OptionInput = ({ option, setOption, addOption }) => {
    return (
        <FormGroup className="mb-4" row>
            <Col md="10" xs="10">
                <Input
                    type="text"
                    key={option.order}
                    id={'Option-' + option.order}
                    placeholder={'Option ' + option.order}
                    onChange={(event) => {
                        setOption(option.order, event.target.value)
                    }}
                    className="form-control"
                    autoComplete="off"
                />
            </Col>
            <Col md="2" xs="2">
                <button type="button" className="inner btn btn-secondary" onClick={addOption}>
                    {'+'}
                </button>
            </Col>
        </FormGroup>
    )
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
