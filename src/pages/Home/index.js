import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Table,
    Label,
    Input,
    Badge,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

const EcommerceCustomers = (props) => {
    return (
        <div className="page-content">
            <Container fluid>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <Row className="mb-2">
                                    <Col sm="9"></Col>
                                    <Col sm="3">
                                        <div className="position-relative">
                                            <input type="text" className="form-control" placeholder="Search Stocks..." />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="table-responsive">
                                    <Table className="table-centered table-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Username</th>
                                                <th>Phone / Email</th>
                                                <th>Address</th>
                                                <th>Rating</th>
                                                <th>Wallet Balance</th>
                                                <th>Joining Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-checkbox">
                                                        <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <Label className="custom-control-label" htmlFor="customCheck1">
                                                            &nbsp;
                                                        </Label>
                                                    </div>
                                                </td>
                                                <td>Stephen Rash</td>
                                                <td>
                                                    <p className="mb-1">325-250-1106</p>
                                                    <p className="mb-0">StephenRash@teleworm.us</p>
                                                </td>

                                                <td>2470 Grove Street Bethpage, NY 11714</td>
                                                <td>
                                                    <Badge color="success" className="font-size-12">
                                                        <i className="mdi mdi-star mr-1"></i> 4.2
                                                    </Badge>
                                                </td>
                                                <td>$5,412</td>
                                                <td>07 Oct, 2019</td>
                                                <td>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle href="#" className="card-drop" tag="i">
                                                            <i className="mdi mdi-dots-horizontal font-size-18"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu right>
                                                            <DropdownItem href="#">
                                                                <i className="mdi mdi-pencil font-size-16 text-success mr-2"></i>Edit
                                                            </DropdownItem>
                                                            <DropdownItem href="#">
                                                                <i className="mdi mdi-trash-can font-size-16 text-danger mr-2"></i>Delete
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EcommerceCustomers
