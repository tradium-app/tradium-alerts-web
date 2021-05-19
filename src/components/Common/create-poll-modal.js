import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap'

import modalimage1 from '../../assets/images/product/img-7.png'
import modalimage2 from '../../assets/images/product/img-4.png'

const CreatePollModal = ({ isShowing, toggle }) => {
    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} centered={true} className="exampleModal" tabIndex="-1" toggle={toggle}>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Create a Poll</ModalHeader>
                <ModalBody>
                    <p className="mb-2">
                        Product id: <span className="text-primary">#SK2540</span>
                    </p>
                    <p className="mb-4">
                        Billing Name: <span className="text-primary">Neal Matthews</span>
                    </p>

                    <div className="table-responsive">
                        <Table className="table table-centered table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <div>
                                            <img src={modalimage1} alt="" className="avatar-sm" />
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                            <p className="text-muted mb-0">$ 225 x 1</p>
                                        </div>
                                    </td>
                                    <td>$ 255</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <div>
                                            <img src={modalimage2} alt="" className="avatar-sm" />
                                        </div>
                                    </th>
                                    <td>
                                        <div>
                                            <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                            <p className="text-muted mb-0">$ 145 x 1</p>
                                        </div>
                                    </td>
                                    <td>$ 145</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h6 className="m-0 text-right">Sub Total:</h6>
                                    </td>
                                    <td>$ 400</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h6 className="m-0 text-right">Shipping:</h6>
                                    </td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h6 className="m-0 text-right">Total:</h6>
                                    </td>
                                    <td>$ 400</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
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
