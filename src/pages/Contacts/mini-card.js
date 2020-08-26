import React from 'react';
import { Col, Card, CardBody, Media } from "reactstrap";

const MiniCards = (props) => {

    return (
            <React.Fragment>
                <Col md="4">
                    <Card className="mini-stats-wid">
                        <CardBody>
                            <Media>
                                <Media body>
                                    <p className="text-muted font-weight-medium">{props.title}</p>
                                    <h4 className="mb-0">{props.text}</h4>
                                </Media>

                                <div className="mini-stat-icon avatar-sm align-self-center rounded-circle bg-primary">
                                    <span className="avatar-title">
                                        <i className={"bx " + props.iconClass + " font-size-24"}></i>
                                    </span>
                                </div>
                            </Media>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
          );
    }
        
export default MiniCards;