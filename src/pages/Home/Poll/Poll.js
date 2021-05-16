import { Row, Col, Card, CardBody, FormGroup, Button, Label, Container, Progress } from 'reactstrap'

const Poll = () => {
    return (
        <div className="control-group">
            <div className="controls mb-4">
                <p className="font-size-18">What is the best serverless platform?</p>

                <div className="custom-control custom-radio mb-4">
                    <input type="radio" id="radio5" name="positions" className="custom-control-input" value="toast-top-right" />
                    <Label className="custom-control-label d-inline-block" for="radio5" xl="12">
                        AWS Lambda
                        <Progress color="primary" className="mt-2" value={25} max={100}></Progress>
                    </Label>
                </div>

                <div className="custom-control custom-radio mb-4">
                    <input type="radio" id="radio6" name="positions" className="custom-control-input" value="toast-top-right" />
                    <Label className="custom-control-label d-inline-block" for="radio6" xl="12">
                        Azure Functions
                        <Progress color="primary" className="mt-2" value={35} max={100}></Progress>
                    </Label>
                </div>
            </div>
        </div>
    )
}

export default Poll
