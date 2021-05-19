import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Input, Button } from 'reactstrap'

const CreatePollModal = ({ isShowing, toggle }) => {
    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle}>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create a Poll</ModalHeader>
                <ModalBody>
                    <Form className="justify-content-center">
                        <FormGroup className="mb-4 justify-content-center" row>
                            <Col md="12">
                                <textarea type="text" className="form-control" id="poll-question" placeholder="Start with a Question" rows="3" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="mb-4 justify-content-center" row>
                            <Col md="10" xs="10">
                                <Input type="text" className="form-control" id="option1" placeholder="Option 1" />
                            </Col>
                            <Col md="2" xs="2">
                                <button type="button" className="inner btn btn-primary">
                                    {'+'}
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="button" color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </div>
        </Modal>
    ) : null
}
export default CreatePollModal
