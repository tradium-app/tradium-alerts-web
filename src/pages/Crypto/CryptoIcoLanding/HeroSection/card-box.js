import React from 'react';
import { Col, Card, CardBody, Media } from "reactstrap";

const CardBox = (props) => {

    return (
            <React.Fragment>
                                {
                                    props.coins.map((coin, key) =>
                                        <Col md="4" key={key}>
                                            <Card>
                                                <CardBody>
                                                    <Media>
                                                        <div className="avatar-xs mr-3">
                                                            <span className={"avatar-title rounded-circle bg-soft-" + coin.color + " text-" + coin.color + " font-size-18"}>
                                                                <i className={coin.icon}></i>
                                                            </span>
                                                        </div>
                                                        <Media body>
                                                            <p className="text-muted">{coin.title}</p>
                                                            <h5>$ {coin.value}</h5>
                                                            <p className="text-muted text-truncate mb-0">{coin.isIncrease ? "+ " : "- "} {coin.rate} <i className={coin.isIncrease ? "mdi mdi-arrow-up ml-1 text-success" : "mdi mdi-arrow-down ml-1 text-danger"}></i></p>
                                                        </Media>
                                                    </Media>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
            </React.Fragment>
          );
    }
        
export default CardBox;