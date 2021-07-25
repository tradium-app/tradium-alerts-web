import { Col } from 'reactstrap'

const ConfirmAlert = () => {
    return (
        <div className="row justify-content-center">
            <Col lg="6">
                <div className="text-center">
                    <div className="mb-4">
                        <i className="bx bx-bell text-primary display-4"></i>
                    </div>
                    <div>
                        <h5>RSI Oversold signal configured</h5>
                        <p>An alert email will be sent to syuraj@gmail.com when RSI crosses 80.</p>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default ConfirmAlert
