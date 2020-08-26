import React, { useState, useEffect } from 'react';

import { Row, Col, Card,Alert, CardBody, Button, Modal, ModalHeader, ModalBody,Container } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import BootstrapTheme from '@fullcalendar/bootstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const DefaultEvents = [{
    id: 1,
    title: 'Hey!',
    start: new Date().setDate(new Date().getDate() + 1),
    className: 'bg-warning text-white'
},
{
    id: 2,
    title: 'See John Deo',
    start: new Date(),
    end: new Date(),
    className: 'bg-success text-white'
},
{
    id: 3,
    title: 'Meet John Deo',
    start: new Date().setDate(new Date().getDate() + 8),
    className: 'bg-info text-white'
},
{
    id: 4,
    title: 'Buy a Theme',
    start: new Date().setDate(new Date().getDate() + 7),
    className: 'bg-primary text-white'
}];

const DefaultCategories = [
    {
        id: 1,
        title: 'New Theme Release',
        type: 'success'
    },
    {
        id: 2,
        title: 'My Event',
        type: 'info'
    },
    {
        id: 3,
        title: 'Meet Manager',
        type: 'warning'
    },
    {
        id: 4,
        title: 'Report Error',
        type: 'danger'
    },
];
const event1= { id: 0, title: "", title_category: "", start: "", className: "", category: "", event_category: "" };
const Index = (props) => {

    const [calendarEvents, setCalendarEvents] = useState(DefaultEvents);
    const [categories, setCategories] = useState(DefaultCategories);
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modalcategory, setModalcategory] = useState(false);
    const [event, setEvent] = useState(event1);
    const [selectedDay, setSelectedDay] = useState(0);
    const title_category = false;

    const calendarComponentRef = React.createRef();

    useEffect(() => {
        new Draggable(document.getElementById("external-events"), {
            itemSelector: '.external-event',
        });
      });

    /**
     * Handling the modal state
     */
    function toggle() {
        setModal(!modal)
    }

    function toggle1() {
        setModal1(!modal1)
    }

    function togglecategory() {
        setModalcategory(!modalcategory)
    }

    /**
     * Handling date click on calendar
     */
    const handleDateClick = (arg) => {
        setSelectedDay(arg);
        toggle();
    }

    /**
     * Handling click on event on calendar
     */
    const handleEventClick = (arg) => {
        const eventNew = arg.event;
        
        const event_tmp = { id: eventNew.id, title: eventNew.title, title_category: eventNew.title_category, start: eventNew.start, className: eventNew.classNames, category: eventNew.classNames[0], event_category: eventNew.classNames[0] };
            
        setEvent(event_tmp);
        toggle1();
    }

    /**
     * Handling submit event on event form
     */
    const handleValidEventSubmit = (e, values) => {
        var newEvent = {};

        
            newEvent = {
                id: calendarEvents.length + 1,
                title: values['title'],
                start: selectedDay ? selectedDay.date : new Date(),
                className: values.category + ' text-white'
            };
        

        // save new event
        setCalendarEvents(calendarEvents.concat(newEvent));
        setSelectedDay(null);

        toggle();
    }

    const handleValidEventSubmitEvent = (e, values) => {
        var newEvent = {};
            newEvent = { id: event.id, title: values.title, classNames: values.category + ' text-white', start: event.start };
            //first, remove array item, which we want to edit
            let filteredArray = calendarEvents.filter(item => item.id + "" !== event.id + "");

            //then concat update item details
            let NewArray = filteredArray.concat(newEvent);

            //store to state
            setCalendarEvents(NewArray);
            setEvent(null);
        setSelectedDay(null);

        toggle1();
    }

    const handleValidEventSubmitcategory = (e, values) => {

        var newEvent = {};

        newEvent = {
            id: calendarEvents.length + 1,
            title: values['title_category'],
            type: values.event_category
        };
        // categories.concat(newEvent);
        setCategories(categories.concat(newEvent));

        togglecategory();
    }

    /**
     * On calendar drop event
     */
    const onDrop = (event) => {
        const draggedEl = event.draggedEl;

        var newEvent = {
            id: calendarEvents.length + 1,
            title: draggedEl.innerText,
            start: event.date,
            className: draggedEl.getAttribute('data-type') + ' text-white'
        };

        // save new event
        setCalendarEvents(calendarEvents.concat(newEvent));
    }

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Dashboard" breadcrumbItem="Calendar" />

                        <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col lg={3}>
                                                <Button color="primary" className="font-16 btn-block" onClick={() => togglecategory() }>
                                                    <i className="mdi mdi-plus-circle-outline"></i> Create New Event
                                        </Button>

                                                <div id="external-events" className="mt-3">
                                                    <p className="text-muted">Drag and drop your event or click in the calendar</p>

                                                    {categories.map((category, i) => {
                                                        return <Alert color={category.type}>{category.title} </Alert>
                                                       })}
                                                </div>

                                                <div className="mt-5 d-none d-xl-block">
                                                    <h5 className="text-center">How It Works ?</h5>

                                                    <ul className="pl-3">
                                                        <li className="text-muted mb-3">
                                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                        </li>
                                                        <li className="text-muted mb-3">
                                                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                                                        </li>
                                                        <li className="text-muted mb-3">
                                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col className="col-lg-9">
                                                {/* fullcalendar control */}
                                                <FullCalendar ref={calendarComponentRef} defaultView="dayGridMonth" plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                                                    slotDuration={'00:15:00'}
                                                    minTime={'08:00:00'}
                                                    maxTime={'19:00:00'}
                                                    handleWindowResize={true}
                                                    themeSystem="bootstrap"
                                                    header={{
                                                        left: 'prev,next today',
                                                        center: 'title',
                                                        right: 'dayGridMonth,dayGridWeek,dayGridDay'
                                                    }}
                                                    events={calendarEvents}
                                                    editable={true}
                                                    droppable={true}
                                                    eventLimit={true}
                                                    selectable={true}
                                                    dateClick={handleDateClick}
                                                    eventClick={handleEventClick}
                                                    drop={onDrop}
                                                    id="calendar" />

                                                {/* New event modal */}
                                                <Modal isOpen={modal} toggle={() => toggle()} className="">
                                                    <ModalHeader toggle={() => toggle()} tag="h4">
                                                        Add Event
                                            </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={handleValidEventSubmit}>
                                                            <Row form>
                                                                <Col className="col-12">
                                                                    <AvField name="title" label="Event Name" type="text" errorMessage="Invalid name" validate={{
                                                                        required: { value: true }
                                                                    }} value={event ? event.title : ''} />
                                                                </Col>
                                                                <Col className="col-12">
                                                                    <AvField type="select" name="category" label="Select Category"
                                                                        value={event ? event.category : 'bg-primary'}>
                                                                        <option value="bg-danger">Danger</option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </AvField>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-right">
                                                                        <button type="button" className="btn btn-light mr-2" onClick={() => toggle()}>Close</button>
                                                                        <button type="submit" className="btn btn-success save-event">Save</button>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </AvForm>
                                                    </ModalBody>
                                                </Modal>

                                                {/* edit event modal */}
                                                <Modal isOpen={modal1} toggle={() => toggle1()} className="">
                                                    <ModalHeader toggle={() => toggle1()} tag="h4">
                                                        Edit Event
                                            </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={handleValidEventSubmitEvent}>
                                                            <Row form>
                                                                <Col className="col-12">
                                                                    <AvField name="title" label="Event Name" type="text" errorMessage="Invalid name" validate={{
                                                                        required: { value: true }
                                                                    }} value={event ? event.title : ''} />
                                                                </Col>
                                                                <Col className="col-12">
                                                                    <AvField type="select" name="category" label="Select Category"
                                                                        value={event ? event.category : 'bg-primary'}>
                                                                        <option value="bg-danger">Danger</option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </AvField>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-right">
                                                                        <button type="button" className="btn btn-light mr-2" onClick={() => toggle()}>Close</button>
                                                                        <button type="submit" className="btn btn-success save-event">Save</button>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </AvForm>
                                                    </ModalBody>
                                                </Modal>

                                                <Modal isOpen={modalcategory} toggle={() => togglecategory()} className="">
                                                    <ModalHeader toggle={() => togglecategory()} tag="h4">
                                                        Add a category
                                            </ModalHeader>
                                                    <ModalBody>
                                                        <AvForm onValidSubmit={handleValidEventSubmitcategory}>
                                                            <Row form>
                                                                <Col className="col-12">
                                                                    <AvField name="title_category" label="Category Name" type="text" errorMessage="Invalid name" validate={{
                                                                        required: { value: true }
                                                                    }} value={title_category ? event.title_category : ''} />
                                                                </Col>
                                                                <Col className="col-12">
                                                                    <AvField type="select" name="event_category" label="Choose Category Color"
                                                                        value={event ? event.event_category : 'bg-primary'}>
                                                                        <option value="bg-danger">Danger</option>
                                                                        <option value="bg-success">Success</option>
                                                                        <option value="bg-primary">Primary</option>
                                                                        <option value="bg-info">Info</option>
                                                                        <option value="bg-dark">Dark</option>
                                                                        <option value="bg-warning">Warning</option>
                                                                    </AvField>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <div className="text-right">
                                                                        <button type="button" className="btn btn-light mr-2" onClick={() => togglecategory()}>Close</button>
                                                                        <button type="submit" className="btn btn-success save-event">Save</button>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </AvForm>
                                                    </ModalBody>
                                                </Modal>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
              );
        }
            
export default Index;