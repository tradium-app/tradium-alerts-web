import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Table, Badge } from 'reactstrap'
import img1 from '../../assets/images/poll.png'
import SearchStock from '../../components/Common/SearchStock'

const HomePage = (props) => {
    const handleSubmit = (event) => {
        // if (searchTerm) {
        //     props.history.push('/search?q=' + searchTerm)
        // }
        event.preventDefault()
    }

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
                                        <form onSubmit={handleSubmit} className="search-box mb-2">
                                            <div className="position-relative">
                                                <SearchStock className="form-control" />
                                            </div>
                                        </form>
                                    </Col>
                                </Row>

                                <div className="table-responsive">
                                    <Table className="table-centered table-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Symbol</th>
                                                <th>Price</th>
                                                <th>Change%</th>
                                                <th>Market Cap.</th>
                                                <th>3 Month Low</th>
                                                <th>3 Month High</th>
                                                <th>RSI</th>
                                                <th>MACD</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src={img1} alt="" className="avatar-sm img-thumbnail rounded-circle" />
                                                </td>
                                                <td>22.33</td>
                                                <td>3.44</td>
                                                <td>117.14</td>
                                                <td>
                                                    <Badge color="success" className="font-size-12">
                                                        <i className="mdi mdi-star mr-1"></i> 4.2
                                                    </Badge>
                                                </td>
                                                <td>$5,412</td>
                                                <td>OverSold</td>
                                                <td>OverSold</td>
                                                <td>
                                                    <Link to="#" onClick={() => {}} className="action-icon text-danger">
                                                        <i className="mdi mdi-trash-can font-size-18"></i>
                                                    </Link>
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

export default HomePage
