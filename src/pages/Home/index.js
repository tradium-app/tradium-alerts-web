import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Table, Badge, Media } from 'reactstrap'
import img1 from '../../assets/images/poll.png'
import SearchStock from '../../components/Common/SearchStock'

const HomePage = (props) => {
    const handleSelect = (symbol) => {
        props.history.push('/symbol/' + symbol.value)
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
                                        <div className="position-relative">
                                            <SearchStock className="form-control mb-2" handleSelect={handleSelect} />
                                        </div>
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
                                                    <Media className="mb-4">
                                                        <div className="mr-3">
                                                            <img src={img1} alt="" className="avatar-xs img-thumbnail rounded-circle" />
                                                        </div>
                                                        <Media body>
                                                            <h5 className="font-size-13 mb-1">
                                                                <Link to="/symbol/TSLA">TSLA</Link>
                                                            </h5>
                                                            <p className="text-muted mb-1">Tesla</p>
                                                        </Media>
                                                    </Media>
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
