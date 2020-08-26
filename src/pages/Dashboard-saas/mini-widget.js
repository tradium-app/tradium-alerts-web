import React, { Component } from 'react';
import { Col, Card, CardBody } from "reactstrap";

class MiniWidget extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.reports.map((report, key) =>
                                    <Col sm="4" key={key}>
                                        <Card>
                                            <CardBody>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="avatar-xs mr-3">
                                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-18">
                                                            <i className={report.icon}></i>
                                                        </span>
                                                    </div>
                                                    <h5 className="font-size-14 mb-0">{report.title}</h5>
                                                </div>
                                                <div className="text-muted mt-4">
                                                    <h4>{report.value} <i className="mdi mdi-chevron-up ml-1 text-success"></i></h4>
                                                    <div className="d-flex">
                                                        <span className={"badge badge-soft-" + report.color + " font-size-12"}> {report.badgeValue} </span> <span className="ml-2 text-truncate">{report.desc}</span>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                    )
                }
                                    
            </React.Fragment>
        );
    }
}

export default MiniWidget;