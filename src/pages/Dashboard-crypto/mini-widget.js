import React from 'react';
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from 'react-apexcharts';

const MiniWidget = (props) => {
          return (
            <React.Fragment>
                {
                    props.reports.map((report , key) =>
                        <Col sm="4" key={key}>
                            <Card>
                                <CardBody>
                                    <p className="text-muted mb-4"><i className={ report.icon + " h2 text-" + report.color + " align-middle mb-0 mr-3"}></i> {report.title} </p>

                                    <Row>
                                        <Col xs="6">
                                            <div>
                                                <h5>{report.value}</h5>
                                                <p className="text-muted text-truncate mb-0">{report.desc} <i className="mdi mdi-arrow-up ml-1 text-success"></i></p>
                                            </div>
                                        </Col>
                                        <Col xs="6">
                                            <div>
                                                <div className="apex-charts">
                                                    <ReactApexChart options={report.options} series={report.series} type="area" height={40} />  
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
               
            </React.Fragment>
          );
        }

export default MiniWidget;