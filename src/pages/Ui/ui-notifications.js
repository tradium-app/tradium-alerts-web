import React, { useState } from 'react';

import { Row, Col, Card, CardBody, FormGroup, Button, Label,Container } from "reactstrap";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const UiNotifications = (props) => {

     const [showEasing, setshowEasing] = useState("swing");
     const [hideEasing, sethideEasing] = useState("linear");
     const [showMethod, setshowMethod] = useState("fadeIn");
     const [hideMethod, sethideMethod] = useState("fadeIn");
     const [showDuration, setshowDuration] = useState(300);
     const [hideDuration, sethideDuration] = useState(1000);
     const [timeOut, settimeOut] = useState(5000);
     const [extendedTimeOut, setextendedTimeOut] = useState(1000);

   function showToast(){
        var ele = document.getElementsByName('toastType'); 
        var position = document.getElementsByName("positions");
        var toastType;
        var title = document.getElementById("title").value;
        var message = "Have fun storming the castle!";
        
        if (document.getElementById("message").value !== "" )
            message=document.getElementById("message").value;

        //Close Button
        var closeButton = document.getElementById("closeButton").checked;

        //Debug
        var debug = document.getElementById("debugInfo").checked;

        //Progressbar
        var progressBar = document.getElementById("progressBar").checked;

        //Duplicates
        var preventDuplicates = document.getElementById("preventDuplicates").checked;

        //Newest on Top
        var newestOnTop = document.getElementById("newestOnTop").checked;

        //position class
        var positionClass = "toast-top-right";

        //Fetch position
        for(var p = 0; p < position.length; p++) { 
            if(position[p].checked) 
                positionClass=position[p].value
        }

        //Show Easing
        var showEasing = document.getElementById("showEasing").value;
        
        //Hide Easing
        var hideEasing  = document.getElementById("hideEasing").value;

        //show method
        var showMethod  = document.getElementById("showMethod").value;

        //Hide method
        var hideMethod  = document.getElementById("hideMethod").value;


        //show duration
        var showDuration  = document.getElementById("showDuration").value;

        //Hide duration
        var hideDuration  = document.getElementById("hideDuration").value;

        //timeout
        var timeOut  = document.getElementById("timeOut").value;

        //extended timeout
        var extendedTimeOut   = document.getElementById("extendedTimeOut").value;

        //Fetch checked Type
        for(var i = 0; i < ele.length; i++) { 
            if(ele[i].checked) 
                toastType=ele[i].value
        }
        
        toastr.options = {
            positionClass : positionClass,
            timeOut: timeOut,
            extendedTimeOut : extendedTimeOut,
            closeButton : closeButton,
            debug : debug,
            progressBar : progressBar,
            preventDuplicates : preventDuplicates,
            newestOnTop : newestOnTop,
            showEasing : showEasing,
            hideEasing : hideEasing,
            showMethod : showMethod,
            hideMethod : hideMethod,
            showDuration : showDuration,
            hideDuration : hideDuration
        }
        
        // setTimeout(() => toastr.success(`Settings updated `), 300)
        //Toaster Types
        if(toastType === "info")
            toastr.info(message,title)
        else if(toastType === "warning")
            toastr.warning(message,title)
        else if(toastType === "error")
            toastr.error(message,title)
        else
            toastr.success(message,title)
    }

   function clearToast() {
        toastr.clear();
    }

    return (
        <>
            <div className="page-content">
                    <Container fluid={true}>

                    <Breadcrumbs title="UI Elements" breadcrumbItem="Notifications" />
                   
                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xl="4">
                                                <div className="control-group">
                                                    <div className="controls">
                                                        <FormGroup>
                                                            <Label className="control-label">Title</Label>
                                                            <input id="title" type="text" className="input-large form-control" placeholder="Enter a title ..." />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label className="control-label">Message</Label>
                                                            <textarea className="input-large form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                                <div className="control-group my-4">
                
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input input-mini" id="closeButton" value="checked"/>
                                                        <Label className="custom-control-label" for="closeButton">Close Button</Label>
                                                    </div>
                
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input input-mini" id="debugInfo" value="checked"/>
                                                        <Label className="custom-control-label" for="debugInfo">Debug</Label>
                                                    </div>
                
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input input-mini" id="progressBar" value="checked"/>
                                                        <Label className="custom-control-label" for="progressBar">Progress Bar</Label>
                                                    </div>
                
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input input-mini" id="preventDuplicates" value="checked"/>
                                                        <Label className="custom-control-label" for="preventDuplicates">Prevent Duplicates</Label>
                                                    </div>
                
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input input-mini" id="addClear" value="checked"/>
                                                        <Label className="custom-control-label" for="addClear">Add button to force clearing a toast, ignoring focus</Label>
                                                    </div>
                
                                                    <div className="custom-control custom-checkbox mb-2">
                                                        <input type="checkbox" className="custom-control-input input-mini" id="newestOnTop" value="checked"/>
                                                        <Label className="custom-control-label" for="newestOnTop">Newest on top</Label>
                                                    </div>
                
                                                </div>
                                            </Col>
                
                                            <Col xl="2">
                                                <div className="control-group" id="toastTypeGroup">
                                                    <div className="controls mb-4">
                                                        <Label>Toast Type</Label>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio1" name="toastType" className="custom-control-input" value="success" defaultChecked/>
                                                            <Label className="custom-control-label" for="radio1">Success</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio2" name="toastType" className="custom-control-input" value="info"/>
                                                            <Label className="custom-control-label" for="radio2">Info</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio3" name="toastType" className="custom-control-input" value="warning"/>
                                                            <Label className="custom-control-label" for="radio3">Warning</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio4" name="toastType" className="custom-control-input" value="error"/>
                                                            <Label className="custom-control-label" for="radio4">Error</Label>
                                                        </div>
                
                                                    </div>
                                                </div>
                                                <div className="control-group" id="positionGroup">
                                                    <div className="controls mb-4">
                                                        <Label>Position</Label>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio5" name="positions" className="custom-control-input" value="toast-top-right"/>
                                                            <Label className="custom-control-label" for="radio5">Top Right</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio6" name="positions" className="custom-control-input" value="toast-bottom-right" />
                                                            <Label className="custom-control-label" for="radio6">Bottom Right</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio7" name="positions" className="custom-control-input" value="toast-bottom-left" />
                                                            <Label className="custom-control-label" for="radio7">Bottom Left</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio8" name="positions" className="custom-control-input" value="toast-top-left" />
                                                            <Label className="custom-control-label" for="radio8">Top Left</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio9" name="positions" className="custom-control-input" value="toast-top-full-width" />
                                                            <Label className="custom-control-label" for="radio9">Top Full Width</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio10" name="positions" className="custom-control-input" value="toast-bottom-full-width" />
                                                            <Label className="custom-control-label" for="radio10">Bottom Full Width</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio11" name="positions" className="custom-control-input" value="toast-top-center" />
                                                            <Label className="custom-control-label" for="radio11">Top Center</Label>
                                                        </div>
                
                                                        <div className="custom-control custom-radio mb-2">
                                                            <input type="radio" id="radio12" name="positions" className="custom-control-input" value="toast-bottom-center" />
                                                            <Label className="custom-control-label" for="radio12">Bottom Center</Label>
                                                        </div>
                
                                                    </div>
                                                </div>
                                            </Col>
                
                                            <Col xl="3">
                                                <div className="control-group">
                                                    <div className="controls">
                                                        <FormGroup>
                                                            <Label for="showEasing">Show Easing</Label>
                                                            <input id="showEasing" type="text" placeholder="swing, linear" className="input-mini form-control" value={showEasing} onChange={ (e) => { setshowEasing(e.target.value) } } />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="hideEasing">Hide Easing</Label>
                                                            <input id="hideEasing" type="text" placeholder="swing, linear" className="input-mini form-control" value={hideEasing} onChange={ (e) => { sethideEasing(e.target.value) }}/>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="showMethod">Show Method</Label>
                                                            <input id="showMethod" type="text" placeholder="show, fadeIn, slideDown" className="input-mini form-control" value={showMethod} onChange={ (e) => { setshowMethod(e.target.value) }} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="hideMethod">Hide Method</Label>
                                                            <input id="hideMethod" type="text" placeholder="hide, fadeOut, slideUp" className="input-mini form-control" value={hideMethod} onChange={ (e) => { sethideMethod(e.target.value) }} />
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                            </Col>
                
                                            <Col xl="3">
                                                <div className="control-group">
                                                    <div className="controls">
                                                        <FormGroup>
                                                            <Label for="showDuration">Show Duration</Label>
                                                            <input id="showDuration" type="text" placeholder="ms" className="input-mini form-control" value={showDuration} onChange={ (e) => { setshowDuration(e.target.value) }} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="hideDuration">Hide Duration</Label>
                                                            <input id="hideDuration" type="text" placeholder="ms" className="input-mini form-control" value={hideDuration} onChange={ (e) => { sethideDuration(e.target.value) }} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="timeOut">Time out</Label>
                                                            <input id="timeOut" type="text" placeholder="ms" className="input-mini form-control" value={timeOut} onChange={ (e) => { settimeOut(e.target.value) }} />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label for="extendedTimeOut">Extended time out</Label>
                                                            <input id="extendedTimeOut" type="text" placeholder="ms" className="input-mini form-control" value={extendedTimeOut} onChange={ (e) => { setextendedTimeOut(e.target.value) }}/>
                                                        </FormGroup>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                
                                        <Row className="mt-4">
                                            <Col md="12">
                                                <div className="button-items">
                                                    <Button
                                                        type="button"
                                                        color="primary"
                                                        id="showtoast"
                                                        onClick={() => { showToast() } }
                                                    >
                                                        Show Toast
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        color="danger"
                                                        id="cleartoasts"
                                                        onClick={() => { clearToast() } }
                                                    >
                                                        Clear Toasts
                                                    </Button>
                                                    <Button type="button" color="danger" id="clearlasttoast">Clear Last Toast</Button>
                                                </div>
                                            </Col>
                                        </Row>
                
                                        <div className="mt-3">
                                            <Col md="12">
                                                <pre id='toastrOptions' className="toastr-options"></pre>
                                            </Col>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
                </> 
          );
    }

export default UiNotifications;
