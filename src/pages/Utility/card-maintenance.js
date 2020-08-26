import React  from 'react';
import { Col, Card, CardBody} from "reactstrap";

const CardMaintenance = (props) => {

    return (
          <React.Fragment>
                <Col md="4">
                    <Card className="mt-4 maintenance-box">
                        <CardBody>
                            {props.children}
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
          );
    }
        
export default CardMaintenance;