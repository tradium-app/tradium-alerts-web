import React from 'react';
import { Alert, Col, Row, Card, CardBody, CardTitle, CardSubtitle, UncontrolledAlert,Container } from "reactstrap";
import { Link } from "react-router-dom";


//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


const UiAlert = (props) => {

    return (

      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>

            <Breadcrumbs title="UI Elements" breadcrumbItem="Alerts" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Default Alerts </CardTitle>
                    <CardSubtitle className="mb-3">
                      Alerts are available for any length of text, as well as an
                      optional dismiss button. For proper styling, for Example,{" "}
                      <strong>color = </strong>{" "}
                      <code className="highlighter-rouge">"success"</code>
                    </CardSubtitle>

                    <div className="">
                                            <Alert color="primary" >
                                                A simple primary alert—check it out!
                                            </Alert>
                                            <Alert color="secondary" role="alert">
                                                A simple secondary alert—check it out!
                                            </Alert>
                                            <Alert color="success" role="alert">
                                                A simple success alert—check it out!
                                            </Alert>
                                            <Alert ccolor="danger" role="alert">
                                                A simple danger alert—check it out!
                                            </Alert>
                                            <Alert color="warning" role="alert">
                                                A simple warning alert—check it out!
                                            </Alert>
                                            <Alert color="info" className="mb-0" role="alert">
                                                A simple info alert—check it out!
                                            </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Link color </CardTitle>
                    <CardSubtitle className="mb-3">
                      Use the{" "}
                      <code className="highlighter-rouge">.alert-link</code>{" "}
                      utility className to quickly provide matching colored
                      links within any alert.
                    </CardSubtitle>

                    <div className="">
                                                <Alert color="primary">
                                                  A simple primary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                                </Alert>
                                                <Alert color="secondary">
                                                  A simple secondary alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                                </Alert>
                                                <Alert colr="success">
                                                  A simple success alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                                </Alert>
                                                <Alert color="danger">
                                                  A simple danger alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                                </Alert>
                                                <Alert color="warning">
                                                  A simple warning alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                                </Alert>
                                                <Alert color="info" className="mb-0">
                                                  A simple info alert with <Link to="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                                </Alert>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Dismissing </CardTitle>
                    <CardSubtitle className="mb-3">
                      You can see this in action with a live demo:
                    </CardSubtitle>

                    <div className="">
                                            <UncontrolledAlert color="primary" >
                                                A simple primary alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="secondary" role="alert">
                                                A simple secondary alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="success" role="alert">
                                                A simple success alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert ccolor="danger" role="alert">
                                                A simple danger alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="warning" role="alert">
                                                A simple warning alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="info" className="mb-0" role="alert">
                                                A simple info alert—check it out!
                                            </UncontrolledAlert>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">With Icon </CardTitle>
                    <div className="">
                                            <UncontrolledAlert color="primary" className="alert-dismissible fade show" role="alert">
                                                <i className="mdi mdi-bullseye-arrow mr-2"></i>
                                                A simple primary alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="secondary" className="alert-dismissible fade show" role="alert">
                                                <i className="mdi mdi-grease-pencil mr-2"></i>
                                                A simple secondary alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="success" className="alert-dismissible fade show" role="alert">
                                                <i className="mdi mdi-check-all mr-2"></i>
                                                A simple success alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="danger" className="alert-dismissible fade show" role="alert">
                                                <i className="mdi mdi-block-helper mr-2"></i>
                                                A simple danger alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="warning" className="alert-dismissible fade show" role="alert">
                                                <i className="mdi mdi-alert-outline mr-2"></i>
                                                A simple warning alert—check it out!
                                            </UncontrolledAlert>
                                            <UncontrolledAlert color="info" className="alert-dismissible fade show mb-0" role="alert">
                                                <i className="mdi mdi-alert-circle-outline mr-2"></i>
                                                A simple info alert—check it out!
                                            </UncontrolledAlert>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>       
      );
    }

export default UiAlert;
