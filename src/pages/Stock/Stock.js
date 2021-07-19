import React, { useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container, Row, Col, Card, CardBody, CardTitle } from 'reactstrap'

const Stock = ({ authUser }) => {
    let { symbol } = useParams()
    symbol = symbol.toUpperCase()

    const containerId = useRef(null)

    const { loading, error, data } = useQuery(GET_STOCK_PROFILE_QUERY, {
        variables: { symbol },
    })

    useEffect(() => {
        containerId.current = new window.TradingView.widget({
            width: containerId.current.clientWidth,
            height: containerId.current.clientHeight,
            symbol: symbol,
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'light',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            hide_top_toolbar: true,
            save_image: false,
            studies: ['RSI@tv-basicstudies'],
            container_id: 'containerId',
        })
    }, [symbol])

    const user = data?.getUserProfile

    return (
        <React.Fragment>
            <Helmet>
                <title>{symbol + ' | Profile'}</title>
            </Helmet>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl="12">
                            <Card>
                                <CardBody>
                                    <CardTitle className="mb-4">{symbol}</CardTitle>
                                    <div id="containerId" ref={containerId} className="m-4"></div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl="4">
                            <Card className="overflow-hidden">
                                <CardBody className="pt-0">
                                    <Row>
                                        <Col className="text-center">
                                            <div className="avatar-xl mt-2 mb-2 d-inline-block">
                                                <img src={user?.imageUrl} alt="" className="img-thumbnail rounded-circle" />
                                            </div>
                                            <h5 className="font-size-20 text-truncate">{user?.name}</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="text-center pt-4">
                                                <Row>
                                                    <Col xs="6">
                                                        <h5 className="font-size-15">{user?.pollsCreated?.length}</h5>
                                                        <p className="text-muted mb-0">Polls Created</p>
                                                    </Col>
                                                    <Col xs="6">
                                                        <h5 className="font-size-15">0</h5>
                                                        <p className="text-muted mb-0">Polls Answered</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-4 mb-4">
                                                    <Col className="align-self-center text-center"></Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export const GET_STOCK_PROFILE_QUERY = gql`
    query getStockProfile($symbol: String) {
        getStockProfile(symbol: $symbol) {
            _id
            name
            imageUrl
            title
            shortBio
            githubLink
            linkedinLink
            stackOverflowLink
            pollsCreated {
                _id
                pollUrlId
                question
                options {
                    _id
                    text
                    order
                    selected
                    totalVotes
                }
                author {
                    _id
                    userUrlId
                    name
                    imageUrl
                    status
                }
                tags
                createdDate
                modifiedDate
                status
            }
        }
    }
`

const mapStateToProps = (state) => {
    return {
        authUser: state?.Login.authUser,
    }
}

export default withRouter(connect(mapStateToProps, {})(Stock))
