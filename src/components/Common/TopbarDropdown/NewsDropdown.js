import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap'
import SimpleBar from 'simplebar-react'
import { getRelativeTime } from '../time'
import stockImg from '../../../assets/images/stock-default-icon.png'

const NewsDropdown = () => {
    const [menu, setMenu] = useState(false)
    const { loading, error, data } = useQuery(GET_STOCK_NEWS_QUERY)

    const newsLength = data?.getWatchListNews.length

    return (
        <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="dropdown d-inline-block" tag="li">
            <DropdownToggle className="btn header-item noti-icon waves-effect" tag="button" id="page-header-notifications-dropdown">
                <i className="bx bx-globe"></i>
                {newsLength > 0 && <span className="badge badge-danger badge-pill">{newsLength}</span>}
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0" right>
                <div className="p-3">
                    <Row className="align-items-center">
                        <Col>
                            <h6 className="m-0"> {'Top News'} </h6>
                        </Col>
                    </Row>
                </div>

                <SimpleBar style={{ maxHeight: '400px' }}>
                    {!error &&
                        !loading &&
                        data?.getWatchListNews
                            ?.sort((a, b) => b.createdDate - a.createdDate)
                            .map((news, index) => (
                                <a href={news.link} className="text-reset notification-item" key={index} target="_blank" rel="noreferrer">
                                    <div className="media">
                                        <img
                                            src={`https://finnhub.io/api/logo?symbol=${news.symbol}`}
                                            className="avatar-xs img-thumbnail rounded-circle d-inline-block mr-2"
                                            alt=""
                                            onError={(e) => {
                                                if (e.target.src != stockImg) e.target.src = stockImg
                                            }}
                                        />
                                        <div className="media-body">
                                            <div className="font-size-14 mb-1">{news.symbol + ' : ' + news.headline}</div>
                                            <p className="font-size-11 text-muted mb-0">
                                                <i className="mdi mdi-clock-outline"></i> {getRelativeTime(news.modifiedDate)}{' '}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                    {newsLength == 0 && (
                        <div className="text-reset notification-item">
                            <div className="media">
                                <div className="media-body">
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">{`No Recent news yet.`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </SimpleBar>
            </DropdownMenu>
        </Dropdown>
    )
}

export const GET_STOCK_NEWS_QUERY = gql`
    query getWatchListNews {
        getWatchListNews {
            symbol
            headline
            link
            createdDate
        }
    }
`

export default NewsDropdown
