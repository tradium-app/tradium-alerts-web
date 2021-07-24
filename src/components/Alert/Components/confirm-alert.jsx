import { Col } from 'reactstrap'

const ConfirmAlert = () => {
    return (
        <div className="row justify-content-center">
            <Col lg="6">
                <div className="text-center">
                    <div className="mb-4">
                        <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                    </div>
                    <div>
                        <h5>RSI Oversold signal configured</h5>
                        <p>An email will be sent to syuraj@gmail.com when RSI crosses 80.</p>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default ConfirmAlert
