import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Progress,Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const UiProgressbar = (props) => {

    return (
        <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>

            <Breadcrumbs title="UI Elements" breadcrumbItem="Progressbar" />

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Default Examples</CardTitle>
                    <CardSubtitle className="mb-3">
                      Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.
                    </CardSubtitle>

                    <div>
                      <div className="mb-30">
                        <Progress color="primary" value={25}></Progress>
                      </div> <br />
                      <div className="mb-30">
                        <Progress color="primary" value={50}></Progress>
                      </div><br />
                      <div className="mb-30">
                        <Progress color="primary" value={75}></Progress>
                      </div><br />
                      <div>
                        <Progress color="primary" value={100}></Progress>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Backgrounds</CardTitle>
                    <CardSubtitle className="mb-3">
                      Use background utility classes to change the
                      appearance of individual progress bars.
                    </CardSubtitle>

                    <div>
                      <div className="mb-30">
                        <Progress color="success" value={25}></Progress>
                      </div><br />
                      <div className="mb-30">
                        <Progress color="info" value={50}></Progress>
                      </div><br />
                      <div className="mb-30">
                        <Progress color="warning" value={75}></Progress>
                      </div><br />
                      <div>
                        <Progress color="danger" value={100}></Progress>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Labels Example</CardTitle>
                    <CardSubtitle className="mb-3">
                      Add labels to your progress bars by placing text within the{" "}
                      <code className="highlighter-rouge">.progress-bar</code>.
                    </CardSubtitle>

                    <div className="">
                      <Progress color="primary" value={25} >
                        25%
                        </Progress>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Multiple bars</CardTitle>
                    <CardSubtitle className="mb-3">
                      Include multiple progress bars in a progress component if you need.
                    </CardSubtitle>

                    <div className="">
                      <Progress multi>
                        <Progress bar color="primary" value={15}></Progress>
                        <Progress bar color="success" value={30}></Progress>
                        <Progress bar color="info" value={20}></Progress>
                      </Progress>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Height</CardTitle>
                    <CardSubtitle className="mb-3">
                      We only set a{" "} <code className="highlighter-rouge">height</code> value on the{" "}
                      <code className="highlighter-rouge">.progress-bar</code>, so if you change that value the outer{" "}
                      <code className="highlighter-rouge">.progress</code> will automatically resize accordingly.
                    </CardSubtitle>

                    <div className="">
                      <Progress
                        className="mb-2"
                        value={25}
                        color="primary"
                        style={{ height: "3px" }}
                      ></Progress>
                      <Progress
                        value={25}
                        color="primary"
                        style={{ height: "24px" }}
                      ></Progress>

                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Animated stripes</CardTitle>
                    <CardSubtitle className="mb-3">
                      The striped gradient can also be animated. Add{" "} <code className="highlighter-rouge"> striped{" "} animated </code>{" "} to{" "} to animate the stripes right to left via CSS3 animations.
                    </CardSubtitle>

                    <div className="">
                      <Progress striped animated color="primary" value="80" />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Striped</CardTitle>
                    <CardSubtitle className="mb-3">
                      Add{" "} <code className="highlighter-rouge"> striped{" "} </code> to any{" "} to apply a stripe via CSS gradient over the progress bar’s background color.
                    </CardSubtitle>

                    <div className="">
                      <div className="mb-30">
                        <Progress striped color="primary" value={10}></Progress>
                      </div><br />
                      <div className="mb-30">
                        <Progress striped color="success" value={25}></Progress>
                      </div><br />
                      <div className="mb-30">
                        <Progress striped color="info" value={50}></Progress>
                      </div><br />
                      <div className="mb-30">
                        <Progress striped color="warning" value={75}></Progress>
                      </div><br />
                      <div>
                        <Progress striped color="danger" value={100}></Progress>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Custom progress</CardTitle>
                    <p className="card-title-desc mb-5">Example of Custom progress</p>

                    <div className="">
                      <div className="custom-progess mb-5">
                        <Progress className="progress-sm" color="danger" value={84} max={100}></Progress>
                        <div className="avatar-xs progress-icon">
                          <span className="avatar-title rounded-circle border border-danger">
                            <i className="bx bxl-html5 text-danger font-size-18"></i>
                          </span>
                      </div>
                    </div>

                    <div className="custom-progess mb-5">
                        <Progress className="progress-sm" color="primary" value={75} max={100}></Progress>
                        <div className="avatar-xs progress-icon">
                                                    <span className="avatar-title rounded-circle border border-primary">
                                                        <i className="bx bxl-css3 text-primary font-size-18"></i>
                                                    </span>
                                                </div>
                    </div>

                    <div className="custom-progess mb-5">
                        <Progress className="progress-sm" color="info" value={62} max={100}></Progress>
                        <div className="avatar-xs progress-icon">
                                                    <span className="avatar-title rounded-circle border border-info">
                                                        <i className="bx bxl-jquery text-info font-size-18"></i>
                                                    </span>
                                                </div>
                    </div>
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

export default UiProgressbar;
