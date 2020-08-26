import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip, Button, Media, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Nav, NavItem, NavLink, TabContent, TabPane, Card, Form, FormGroup, InputGroup, InputGroupAddon } from "reactstrap";
import classnames from 'classnames';

//Import Scrollbar
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

//Import Breadcrumb
import Breadcrumb from '../../components/Common/Breadcrumb';

const  messagesList = [
                    { id: "34", isRight: true, name: "Henry Wells", message: "Hello!", time: "10:00" },
                    { id: "35", isRight: true, name: "Henry Wells", message: "How are you ?", time: "10:07" },
                    { id: "36", isRight: false, name: "Steven Franklin", message: "I am fine, What about you ?", time: "10:09" },
                ];

 const contacts  = [
                {
                    category: "A",
                    child: [
                        { id: 1, name: "Adam Miller" },
                        { id: 2, name: "Alfonso Fisher" },
                    ]
                },
                {
                    category: "B",
                    child: [
                        { id: 3, name: "Bonnie Harney"  },
                    ]
                },
                {
                    category: "C",
                    child: [
                        { id: 4, name: "Charles Brown" },
                        { id: 5, name: "Carmella Jones" },
                        { id: 6, name: "Carrie Williams" },
                    ]
                },
                {
                    category: "D",
                    child: [
                        { id: 7, name: "Dolores Minter" },
                    ]
                },
            ];

      const  groups = [
                { id: 1, image: "G", name: "General" },
                { id: 2, image: "R", name: "Reporting" },
                { id: 3, image: "M", name: "Meeting" },
                { id: 4, image: "A", name: "Project A" },
                { id: 5, image: "B", name: "Project B" }
            ];
      const chatsList = [
                { id: 1, status: "offline", image: avatar2, name: "Steven Franklin", description: "Hey! there I'm available", time: "05 min", isActive: true },
                { id: 2, status: "online", image: avatar3, name: "Adam Miller", description: "I've finished it! See you so", time: "12 min", isActive: false },
                { id: 3, status: "online", image: avatar3, name: "Keith Gonzales", description: "This theme is awesome!", time: "24 min", isActive: false },
                { id: 4, status: "intermediate", image: avatar4, name: "Jose Vickery", description: "Nice to meet you", time: "1 hr", isActive: false },
                { id: 5, status: "offline", image: avatar4, name: "Mitchel Givens", description: "Hey! there I'm available", time: "3 hrs", isActive: false },
                { id: 6, status: "online", image: avatar6, name: "Stephen Hadley", description: "I've finished it! See you so", time: "5 hrs", isActive: false },
                { id: 7, status: "online", image: avatar6, name: "Keith Gonzales", description: "This theme is awesome!", time: "24 min", isActive: false }
            ];


const Chat = (props) => {

  const Chat_Box_Username2 = "Henry Wells";
  const [chats, setchats] = useState(chatsList);
  const [messages, setmessages] = useState(messagesList);
  const [notification_Menu, setnotification_Menu] = useState(false);
  const [search_Menu, setsearch_Menu] = useState(false);
  const [settings_Menu, setsettings_Menu] = useState(false);
  const [other_Menu, setother_Menu] = useState(false);
  const [activeTab, setactiveTab] = useState('1');
  const [Chat_Box_Username, setChat_Box_Username] = useState("Steven Franklin");
  const [Chat_Box_User_Status, setChat_Box_User_Status] = useState("online");
  const [curMessage, setcurMessage] = useState("");

   function   toggleNotification() {
    setnotification_Menu(!notification_Menu);
    }


    //Toggle Chat Box Menus
  function  toggleSearch() {
    setsearch_Menu(!search_Menu);
    }

    function toggleSettings() {
        setsettings_Menu(!settings_Menu)
    }

   function toggleOther() {
      setother_Menu(!other_Menu);
   }

    function toggleTab(tab) {
        if (activeTab !== tab) {
          setactiveTab(tab)
        }
    }

    //Use For Chat Box
    function UserChatOpen(id, name, status){

        let chatModule = [...chats];

        for (let k = 0; k < 6; k++) { chatModule[k].isActive = false; } // Enable All Option First
        chatModule[id - 1].isActive = true;

        let msg = [{ id: "39", isRight: true, name: "Henry Wells", message: "How are you ?", time: "10:07" },
        { id: "40", isRight: false, name: name, message: "I am fine, What about you ?", time: "10:09" },
        ];
        setChat_Box_Username(name);
        setChat_Box_User_Status(status);
        setmessages(msg);
        setchats(chatModule);
    }

   function addMessage() {
        let d = new Date();
        var n = d.getSeconds();
        let demoMsg = messages;
        demoMsg.push({ isRight: true, name: Chat_Box_Username2, message: curMessage, time: "00:" + n });
        setmessages(demoMsg);
        setcurMessage("");
    }

        return (
                  <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        {/* Render Breadcrumb */}
                        <Breadcrumb title="Skote" breadcrumbItem="Chat" />

                        <Row>
                            <Col lg="12">
                                <div className="d-lg-flex">
                                    <div className="chat-leftsidebar mr-lg-4">
                                        <div className="">
                                            <div className="py-4 border-bottom">
                                                <Media>
                                                    <div className="align-self-center mr-3">
                                                        <img src={avatar1} className="avatar-xs rounded-circle" alt="" />
                                                    </div>
                                                    <Media body>
                                                        <h5 className="font-size-15 mt-0 mb-1">Henry Wells</h5>
                                                        <p className="text-muted mb-0"><i className="mdi mdi-circle text-success align-middle mr-1"></i> Active</p>
                                                    </Media>

                                                    <div>
                                                        <Dropdown isOpen={notification_Menu} toggle={() => { toggleNotification() }} className="chat-noti-dropdown active">
                                                            <DropdownToggle className="btn" tag="i">
                                                                <i className="bx bx-bell bx-tada"></i>
                                                            </DropdownToggle>
                                                            <DropdownMenu right>
                                                                <DropdownItem href="#">Action</DropdownItem>
                                                                <DropdownItem href="#">Another action</DropdownItem>
                                                                <DropdownItem href="#">Something else here</DropdownItem>
                                                            </DropdownMenu>
                                                        </Dropdown>
                                                    </div>
                                                </Media>
                                            </div>

                                            <div className="search-box chat-search-box py-4">
                                                <div className="position-relative">
                                                    <Input type="text" className="form-control" placeholder="Search..." />
                                                    <i className="bx bx-search-alt search-icon"></i>
                                                </div>
                                            </div>

                                            <div className="chat-leftsidebar-nav">
                                                <Nav pills justified>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTab === '1' })}
                                                            onClick={() => { toggleTab('1'); }}
                                                        >
                                                            <i className="bx bx-chat font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Chat</span>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTab === '2' })}
                                                            onClick={() => { toggleTab('2'); }}
                                                        >
                                                            <i className="bx bx-group font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Group</span>
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: activeTab === '3' })}
                                                            onClick={() => { toggleTab('3'); }}
                                                        >
                                                            <i className="bx bx-book-content font-size-20 d-sm-none"></i>
                                                            <span className="d-none d-sm-block">Contacts</span>
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent activeTab={activeTab} className="py-4">
                                                    <TabPane tabId="1">
                                                        <div>
                                                            <h5 className="font-size-14 mb-3">Recent</h5>
                                                            <ul className="list-unstyled chat-list">
                                                                <PerfectScrollbar style={{ height: "410px" }}>
                                                                    {
                                                                        chats.map((chat) =>
                                                                            <li key={chat.id + chat.status} className={chat.isActive ? "active" : ""}>
                                                                                <Link to="#" onClick={() => { UserChatOpen(chat.id, chat.name, chat.status) }}>
                                                                                    <Media>
                                                                                        <div className="align-self-center mr-3">
                                                                                            <i className={chat.status === "online"
                                                                                                ? "mdi mdi-circle text-success font-size-10"
                                                                                                : chat.status === "intermediate" ? "mdi mdi-circle text-warning font-size-10" : "mdi mdi-circle font-size-10"
                                                                                            }></i>
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
                                                                        )
                                                                    }
                                                                </PerfectScrollbar>
                                                            </ul>
                                                        </div>
                                                    </TabPane>

                                                    <TabPane tabId="2">
                                                        <h5 className="font-size-14 mb-3">Group</h5>
                                                        <ul className="list-unstyled chat-list">
                                                            <PerfectScrollbar style={{ height: "410px" }}>
                                                                {
                                                                    groups.map((group) =>
                                                                        <li key={"test" + group.image}>
                                                                            <Link to="#" onClick={() => { UserChatOpen(group.id, group.name, group.status) }}>
                                                                                <Media className="align-items-center">
                                                                                    <div className="avatar-xs mr-3">
                                                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                            {group.image}
                                                                                        </span>
                                                                                    </div>

                                                                                    <Media body>
                                                                                        <h5 className="font-size-14 mb-0">{group.name}</h5>
                                                                                    </Media>
                                                                                </Media>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </PerfectScrollbar>
                                                        </ul>
                                                    </TabPane>

                                                    <TabPane tabId="3">
                                                        <h5 className="font-size-14 mb-3">Contact</h5>

                                                        <div>
                                                            <PerfectScrollbar style={{ height: "410px" }}>
                                                                {
                                                                    contacts.map((contact) =>
                                                                        <div key={"test_" + contact.category} className={contact.category === "A" ? "" : "mt-4"}>
                                                                            <div className="avatar-xs mb-3">
                                                                                <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                                                                    {contact.category}
                                                                                </span>
                                                                            </div>

                                                                            <ul className="list-unstyled chat-list">
                                                                                {
                                                                                    contact.child.map((array) =>
                                                                                        <li key={"test" + array.id}>
                                                                                            <Link to="#" onClick={() => { UserChatOpen(array.id, array.name, array.status) }}>
                                                                                                <h5 className="font-size-14 mb-0">{array.name}</h5>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    )
                                                                }
                                                            </PerfectScrollbar>
                                                        </div>

                                                    </TabPane>
                                                </TabContent>
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
                                                            <i className={Chat_Box_User_Status === "online"
                                                                ? "mdi mdi-circle text-success align-middle mr-1"
                                                                : Chat_Box_User_Status === "intermediate" ? "mdi mdi-circle text-warning align-middle mr-1" : "mdi mdi-circle align-middle mr-1"
                                                            }></i>
                                                            {Chat_Box_User_Status}</p>
                                                    </Col>
                                                    <Col md="8" xs="3">
                                                        <ul className="list-inline user-chat-nav text-right mb-0">
                                                            <li className="list-inline-item d-none d-sm-inline-block">
                                                                <Dropdown isOpen={search_Menu} toggle={()=> { toggleSearch() }}>
                                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                                        <i className="bx bx-search-alt-2"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu className="dropdown-menu-md" right>
                                                                        <Form className="p-3">
                                                                            <FormGroup className="m-0">
                                                                                <InputGroup>
                                                                                    <Input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                                                                    <InputGroupAddon addonType="append">
                                                                                        <Button color="primary" type="submit"><i className="mdi mdi-magnify"></i></Button>
                                                                                    </InputGroupAddon>
                                                                                </InputGroup>
                                                                            </FormGroup>
                                                                        </Form>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </li>
                                                            <li className="list-inline-item  d-none d-sm-inline-block">
                                                                <Dropdown isOpen={settings_Menu} toggle={() => { toggleSettings() }}>
                                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                                        <i className="bx bx-cog"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu right>
                                                                        <DropdownItem href="#">View Profile</DropdownItem>
                                                                        <DropdownItem href="#">Clear chat</DropdownItem>
                                                                        <DropdownItem href="#">Muted</DropdownItem>
                                                                        <DropdownItem href="#">Delete</DropdownItem>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <Dropdown isOpen={other_Menu} toggle={() => { toggleOther() }}>
                                                                    <DropdownToggle className="btn nav-btn" tag="i">
                                                                        <i className="bx bx-dots-horizontal-rounded"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu right>
                                                                        <DropdownItem href="#">Action</DropdownItem>
                                                                        <DropdownItem href="#">Another Action</DropdownItem>
                                                                        <DropdownItem href="#">Something else</DropdownItem>
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
                                                        <PerfectScrollbar style={{ height: "470px" }}>
                                                            <li>
                                                                <div className="chat-day-title">
                                                                    <span className="title">Today</span>
                                                                </div>
                                                            </li>
                                                            {
                                                                messages.map((message) =>
                                                                    <li key={"test_k" + message.id} className={message.isRight ? "right" : ""}>
                                                                        <div className="conversation-list">
                                                                            <UncontrolledDropdown>
                                                                                <DropdownToggle href="#" className="btn nav-btn" tag="i">
                                                                                    <i className="bx bx-dots-vertical-rounded"></i>
                                                                                </DropdownToggle>
                                                                                <DropdownMenu direction="right">
                                                                                    <DropdownItem href="#">Copy</DropdownItem>
                                                                                    <DropdownItem href="#">Save</DropdownItem>
                                                                                    <DropdownItem href="#">Forward</DropdownItem>
                                                                                    <DropdownItem href="#">Delete</DropdownItem>
                                                                                </DropdownMenu>
                                                                            </UncontrolledDropdown>
                                                                            <div className="ctext-wrap">
                                                                                <div className="conversation-name">{message.name}</div>
                                                                                <p>
                                                                                    {message.message}
                                                                                </p>
                                                                                <p className="chat-time mb-0"><i className="bx bx-time-five align-middle mr-1"></i> {message.time}</p>
                                                                            </div>

                                                                        </div>
                                                                    </li>
                                                                )
                                                            }
                                                        </PerfectScrollbar>
                                                    </ul>
                                                </div>
                                                <div className="p-3 chat-input-section">
                                                    <Row>
                                                        <Col>
                                                            <div className="position-relative">
                                                                <input type="text" value={curMessage} onChange={(e) => { setcurMessage(e.target.value) }} className="form-control chat-input" placeholder="Enter Message..." />
                                                                <div className="chat-input-links">
                                                                    <ul className="list-inline mb-0">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#">
                                                                                <i className="mdi mdi-emoticon-happy-outline" id="Emojitooltip"></i>
                                                                                <UncontrolledTooltip placement="top" target="Emojitooltip">
                                                                                    Emojis
                                                                                </UncontrolledTooltip >
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#">
                                                                                <i className="mdi mdi-file-image-outline" id="Imagetooltip"></i>
                                                                                <UncontrolledTooltip placement="top" target="Imagetooltip">
                                                                                    Images
                                                                                </UncontrolledTooltip >
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#">
                                                                                <i className="mdi mdi-file-document-outline" id="Filetooltip"></i>
                                                                                <UncontrolledTooltip placement="top" target="Filetooltip">
                                                                                    Add Files
                                                                                </UncontrolledTooltip >
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Button type="button" color="primary" onClick={() => { addMessage() }} className="btn-rounded chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block mr-2">Send</span> <i className="mdi mdi-send"></i></Button>
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
              );
        }
            
export default Chat;