import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from 'reactstrap'
import SimpleBar from 'simplebar-react'
import { getRelativeTime } from '../time'

const NotificationDropdown = () => {
    const [menu, setMenu] = useState(false)
    const { loading, error, data } = useQuery(GET_NOTIFICATIONS_QUERY)

    const notificationLength = data?.getNotifications.filter((n) => !n.isRead).length

    return (
        <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="dropdown d-inline-block" tag="li">
            <DropdownToggle className="btn header-item noti-icon waves-effect" tag="button" id="page-header-notifications-dropdown">
                <i className="bx bx-bell"></i>
                {notificationLength > 0 && <span className="badge badge-danger badge-pill">{notificationLength}</span>}
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0" right>
                <div className="p-3">
                    <Row className="align-items-center">
                        <Col>
                            <h6 className="m-0"> {'Notifications'} </h6>
                        </Col>
                    </Row>
                </div>

                <SimpleBar style={{ maxHeight: '400px' }}>
                    {!error &&
                        !loading &&
                        data?.getNotifications.map((notification, index) => (
                            <Link
                                to={`/${notification.user?.userUrlId}/${notification.poll?.pollUrlId}`}
                                className="text-reset notification-item"
                                key={index}
                                onClick={() => setMenu(false)}
                            >
                                <div className="media">
                                    <img src={notification.imageUrl} className="mr-3 rounded-circle avatar-xs" alt="" />
                                    <div className="media-body">
                                        <div className="font-size-12 text-muted">
                                            <p className="mb-1">{notification.message}</p>
                                            <p className="mb-0">
                                                <i className="mdi mdi-clock-outline"></i> {getRelativeTime(notification.modifiedDate)}{' '}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </SimpleBar>
            </DropdownMenu>
        </Dropdown>
    )
}

export const GET_NOTIFICATIONS_QUERY = gql`
    query getNotifications {
        getNotifications {
            _id
            message
            imageUrl
            isRead
            modifiedDate
            poll {
                pollUrlId
            }
            user {
                userUrlId
            }
        }
    }
`

export default NotificationDropdown
