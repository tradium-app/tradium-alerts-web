import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Table, Badge, Media } from 'reactstrap'
import gql from 'graphql-tag'
import img1 from '../../assets/images/poll.png'
import SearchStock from '../../components/Common/SearchStock'
import { useQuery } from '@apollo/client'

const HomePage = (props) => {
    const { loading, error, data } = useQuery(GET_WATCHLIST_QUERY, { pollInterval: 30000 })

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
                                            <SearchStock
                                                className="form-control mb-2"
                                                handleSelect={(symbol) => handleSelect(symbol, props.history)}
                                            />
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
                                        <tbody>{data && !error && !loading && data.getWatchList?.map(createWatchListRow)}</tbody>
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

const createWatchListRow = (stock, index) => {
    return (
        <tr key={index}>
            <td>
                <Media>
                    <div className="mr-3">
                        <img src={img1} alt="" className="avatar-xs img-thumbnail rounded-circle" />
                    </div>
                    <Media body>
                        <h5 className="font-size-13 mb-1">
                            <Link to={`/symbol/${stock.symbol.toUpperCase()}`}>{stock.symbol.toUpperCase()}</Link>
                        </h5>
                        <p className="text-muted mb-1">Tesla</p>
                    </Media>
                </Media>
            </td>
            <td>{stock.price}</td>
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
                <Link onClick={() => {}} className="action-icon text-danger" to="#">
                    <i className="mdi mdi-trash-can font-size-18"></i>
                </Link>
            </td>
        </tr>
    )
}

export const GET_WATCHLIST_QUERY = gql`
    query getWatchList {
        getWatchList {
            id
            symbol
            company
            price
        }
    }
`

const handleSelect = (symbol, history) => {
    history.push('/symbol/' + symbol.value)
}
export default HomePage
