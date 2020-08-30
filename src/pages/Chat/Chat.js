import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Button,
    Media,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Card,
} from 'reactstrap'
import classnames from 'classnames'

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

//Import Images
import avatar2 from '../../assets/images/users/avatar-2.jpg'
import avatar3 from '../../assets/images/users/avatar-3.jpg'
import avatar4 from '../../assets/images/users/avatar-4.jpg'
import avatar6 from '../../assets/images/users/avatar-6.jpg'

const messagesList = [
    { id: '34', isRight: true, name: 'Henry Wells', message: 'Hello!', time: '10:00' },
    { id: '35', isRight: true, name: 'Henry Wells', message: 'How are you ?', time: '10:07' },
    { id: '36', isRight: false, name: 'Steven Franklin', message: 'I am fine, What about you ?', time: '10:09' },
]

const chatsList = [
    { id: 1, status: 'offline', image: avatar2, name: 'Steven Franklin', description: "Hey! there I'm available", time: '05 min', isActive: true },
    { id: 2, status: 'online', image: avatar3, name: 'Adam Miller', description: "I've finished it! See you so", time: '12 min', isActive: false },
    { id: 3, status: 'online', image: avatar3, name: 'Keith Gonzales', description: 'This theme is awesome!', time: '24 min', isActive: false },
    { id: 4, status: 'intermediate', image: avatar4, name: 'Jose Vickery', description: 'Nice to meet you', time: '1 hr', isActive: false },
    { id: 5, status: 'offline', image: avatar4, name: 'Mitchel Givens', description: "Hey! there I'm available", time: '3 hrs', isActive: false },
    { id: 6, status: 'online', image: avatar6, name: 'Stephen Hadley', description: "I've finished it! See you so", time: '5 hrs', isActive: false },
    { id: 7, status: 'online', image: avatar6, name: 'Keith Gonzales', description: 'This theme is awesome!', time: '24 min', isActive: false },
]

const Chat = (props) => {
    const Chat_Box_Username2 = 'Henry Wells'
    const [chats, setchats] = useState(chatsList)
    const [messages, setmessages] = useState(messagesList)
    const [settings_Menu, setsettings_Menu] = useState(false)
    const [Chat_Box_Username, setChat_Box_Username] = useState('Steven Franklin')
    const [Chat_Box_User_Status, setChat_Box_User_Status] = useState('online')
    const [curMessage, setcurMessage] = useState('')

    function toggleSettings() {
        setsettings_Menu(!settings_Menu)
    }

    //Use For Chat Box
    function UserChatOpen(id, name, status) {
        let chatModule = [...chats]

        for (let k = 0; k < 6; k++) {
            chatModule[k].isActive = false
        } // Enable All Option First
        chatModule[id - 1].isActive = true

        let msg = [
            { id: '39', isRight: true, name: 'Henry Wells', message: 'How are you ?', time: '10:07' },
            { id: '40', isRight: false, name: name, message: 'I am fine, What about you ?', time: '10:09' },
        ]
        setChat_Box_Username(name)
        setChat_Box_User_Status(status)
        setmessages(msg)
        setchats(chatModule)
    }

    function addMessage() {
        let d = new Date()
        var n = d.getSeconds()
        let demoMsg = messages
        demoMsg.push({ isRight: true, name: Chat_Box_Username2, message: curMessage, time: '00:' + n })
        setmessages(demoMsg)
        setcurMessage('')
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg="12">
                            <div className="d-lg-flex">
                                <div className="chat-leftsidebar mr-lg-4">
                                    <div className="">
                                        <div className="search-box chat-search-box py-4">
                                            <div className="position-relative">
                                                <Input type="text" className="form-control" placeholder="Search..." />
                                                <i className="bx bx-search-alt search-icon"></i>
                                            </div>
                                        </div>
                                        <div className="chat-leftsidebar-nav">
                                            <div>
                                                <h5 className="font-size-14 mb-3">Recent</h5>
                                                <ul className="list-unstyled chat-list">
                                                    <PerfectScrollbar style={{ height: '410px' }}>
                                                        {chats.map((chat) => (
                                                            <li key={chat.id + chat.status} className={chat.isActive ? 'active' : ''}>
                                                                <Link
                                                                    to="#"
                                                                    onClick={() => {
                                                                        UserChatOpen(chat.id, chat.name, chat.status)
                                                                    }}
                                                                >
                                                                    <Media>
                                                                        <div className="align-self-center mr-3">
                                                                            <i
                                                                                className={
                                                                                    chat.status === 'online'
                                                                                        ? 'mdi mdi-circle text-success font-size-10'
                                                                                        : chat.status === 'intermediate'
                                                                                        ? 'mdi mdi-circle text-warning font-size-10'
                                                                                        : 'mdi mdi-circle font-size-10'
                                                                                }
                                                                            ></i>
                                                                        </div>
                                                                        <div className="align-self-center mr-3">
                                                                            <img src={chat.image} className="rounded-circle avatar-xs" alt="" />
                                                                        </div>

                                                                        <Media className="overflow-hidden" body>
                                                                            <h5 className="text-truncate font-size-14 mb-1">{chat.name}</h5>
                                                                            <p className="text-truncate mb-0">{chat.description}</p>
                                                                        </Media>
                                                                        <div className="font-size-11">{chat.time}</div>
                                                                    </Media>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </PerfectScrollbar>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100 user-chat">
                                    <Card>
                                        <div className="p-4 border-bottom ">
                                            <Row>
                                                <Col md="4" xs="9">
                                                    <h5 className="font-size-15 mb-1">{Chat_Box_Username}</h5>

                                                    <p className="text-muted mb-0">
                                                        <i
                                                            className={
                                                                Chat_Box_User_Status === 'online'
                                                                    ? 'mdi mdi-circle text-success align-middle mr-1'
                                                                    : Chat_Box_User_Status === 'intermediate'
                                                                    ? 'mdi mdi-circle text-warning align-middle mr-1'
                                                                    : 'mdi mdi-circle align-middle mr-1'
                                                            }
                                                        ></i>
                                                        {Chat_Box_User_Status}
                                                    </p>
                                                </Col>
                                                <Col md="8" xs="3">
                                                    <ul className="list-inline user-chat-nav text-right mb-0">
                                                        <li className="list-inline-item  d-none d-sm-inline-block">
                                                            <Dropdown
                                                                isOpen={settings_Menu}
                                                                toggle={() => {
                                                                    toggleSettings()
                                                                }}
                                                            >
                                                                <DropdownToggle className="btn nav-btn" tag="i">
                                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                    <DropdownItem href="#">View Profile</DropdownItem>
                                                                    <DropdownItem href="#">Mute</DropdownItem>
                                                                    <DropdownItem href="#">Delete</DropdownItem>
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div>
                                            <div className="chat-conversation p-3">
                                                <ul className="list-unstyled">
                                                    <PerfectScrollbar style={{ height: '470px' }}>
                                                        <li>
                                                            <div className="chat-day-title">
                                                                <span className="title">Today</span>
                                                            </div>
                                                        </li>
                                                        {messages.map((message) => (
                                                            <li key={'test_k' + message.id} className={message.isRight ? 'right' : ''}>
                                                                <div className="conversation-list">
                                                                    <div className="ctext-wrap">
                                                                        <div className="conversation-name">{message.name}</div>
                                                                        <p>{message.message}</p>
                                                                        <p className="chat-time mb-0">
                                                                            <i className="bx bx-time-five align-middle mr-1"></i> {message.time}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </PerfectScrollbar>
                                                </ul>
                                            </div>
                                            <div className="p-3 chat-input-section">
                                                <Row>
                                                    <Col>
                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                value={curMessage}
                                                                onChange={(e) => {
                                                                    setcurMessage(e.target.value)
                                                                }}
                                                                className="form-control chat-input"
                                                                placeholder="Enter Message..."
                                                            />
                                                            <div className="chat-input-links">
                                                                <ul className="list-inline mb-0">
                                                                    <li className="list-inline-item">
                                                                        <Link to="#">
                                                                            <i className="mdi mdi-file-document-outline" id="Filetooltip"></i>
                                                                            <UncontrolledTooltip placement="top" target="Filetooltip">
                                                                                Add Files
                                                                            </UncontrolledTooltip>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-auto">
                                                        <Button
                                                            type="button"
                                                            color="primary"
                                                            onClick={() => {
                                                                addMessage()
                                                            }}
                                                            className="btn-rounded chat-send w-md waves-effect waves-light"
                                                        >
                                                            <span className="d-none d-sm-inline-block mr-2">Send</span>{' '}
                                                            <i className="mdi mdi-send"></i>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Chat
