import React, { useState } from 'react'
import { Row, Col, Card, CardBody, Nav, NavLink, TabContent, TabPane, CardTitle, Form, FormGroup, Label, Input, NavItem, Table } from 'reactstrap'
import classnames from 'classnames'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import BootstrapTheme from '@fullcalendar/bootstrap'
import { Link } from 'react-router-dom'

const DefaultEvents = [
    {
        id: 1,
        title: 'Hey!',
        start: new Date().setDate(new Date().getDate() + 1),
        className: 'bg-warning text-white',
    },
    {
        id: 2,
        title: 'See John Deo',
        start: new Date(),
        end: new Date(),
        className: 'bg-success text-white',
    },
    {
        id: 3,
        title: 'Meet John Deo',
        start: new Date().setDate(new Date().getDate() + 8),
        className: 'bg-info text-white',
    },
    {
        id: 4,
        title: 'Buy a Theme',
        start: new Date().setDate(new Date().getDate() + 7),
        className: 'bg-primary text-white',
    },
]

const ProfileEdit = (props) => {
    const [activeTab, setactiveTab] = useState('1')
    const calendarComponentRef = React.createRef()

    const [calendarEvents, setCalendarEvents] = useState(DefaultEvents)

    return (
        <React.Fragment>
            <div className="checkout-tabs">
                <Row>
                    <Col lg="2">
                        <Nav className="flex-column" pills>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => {
                                        setactiveTab('1')
                                    }}
                                >
                                    <i className="bx bx-menu d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-4">General Info</p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => {
                                        setactiveTab('2')
                                    }}
                                >
                                    <i className="bx bx-calendar d-block check-nav-icon mt-4 mb-2"></i>
                                    <p className="font-weight-bold mb-4">Schedule</p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col lg="10">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">General Info</CardTitle>
                                        <Form>
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="billing-name" md="3" className="col-form-label">
                                                    What do you want to learn*
                                                </Label>
                                                <Col md="9">
                                                    <Input type="text" className="form-control" id="billing-name" />
                                                    <span className="font-13 text-muted">
                                                        e.g "I want to know more about JavaScript React Framework"
                                                    </span>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup className="mb-4" row>
                                                <Label htmlFor="billing-email-address" md="3" className="col-form-label">
                                                    More Description
                                                </Label>
                                                <Col md="9">
                                                    <textarea id="shortbio" className="form-control" rows="2"></textarea>
                                                    <span className="font-13 text-muted">
                                                        e.g "A short greeting to clients A summary of your strengths and skills Any other information
                                                        you want clients to know"
                                                    </span>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="my-4">
                                    <Col>
                                        <div className="text-sm-right">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">
                                                Next <i className="bx bx-fast-forward font-size-24 align-middle ml-2"></i>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Schedule</CardTitle>
                                        <FullCalendar
                                            ref={calendarComponentRef}
                                            defaultView="dayGridWeek"
                                            plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                                            slotDuration={'00:15:00'}
                                            minTime={'08:00:00'}
                                            maxTime={'19:00:00'}
                                            handleWindowResize={true}
                                            themeSystem="bootstrap"
                                            header={{
                                                left: 'prev,next today',
                                                center: 'title',
                                                right: '',
                                            }}
                                            events={calendarEvents}
                                            editable={true}
                                            droppable={true}
                                            eventLimit={true}
                                            selectable={true}
                                            // dateClick={handleDateClick}
                                            // eventClick={handleEventClick}
                                            // drop={onDrop}
                                            id="calendar"
                                        />
                                    </CardBody>
                                </Card>
                                <Row className="my-4">
                                    <Col sm="6">
                                        <Link to="#" className="btn text-muted d-none d-sm-inline-block btn-link">
                                            <i className="bx bx-arrow-back mr-1"></i> Back to General Info{' '}
                                        </Link>
                                    </Col>
                                    <Col sm="6">
                                        <div className="text-sm-right">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">
                                                <i className="bx bx-check-double font-size-24 align-middle mr-2"></i> Confirm
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default ProfileEdit
