import React from 'react';

import { Card, Row, Col, CardBody, CardTitle, CardSubtitle,Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


const UiVideo = (props) => {

    return (
             <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>

                        <Breadcrumbs title="UI Elements" breadcrumbItem="Video" />

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 16:9</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="test" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 21:9</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe title="test1" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 4:3</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-4by3">
                                            <iframe title="tes2" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Responsive embed video 1:1</CardTitle>
                                        <CardSubtitle className="mb-3">Aspect ratios can be customized with modifier classNamees.</CardSubtitle>

                                        <div className="embed-responsive embed-responsive-1by1">
                                            <iframe title="test3" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
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

export default UiVideo;
