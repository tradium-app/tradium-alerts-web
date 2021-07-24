import React from 'react'
import { Link } from 'react-router-dom'
import { Badge, Media, Table } from 'reactstrap'
import img1 from '../../../assets/images/poll.png'

const AlertType = ({ handleSelect }) => {
    return (
        <div className="table-responsive">
            <Table className="table-centered table-nowrap">
                <tbody>
                    <tr>
                        <td>
                            <Link onClick={handleSelect} to="#">
                                <Media>
                                    <div className="mr-3">
                                        <img src={img1} alt="" className="avatar-xs img-thumbnail rounded-circle" />
                                    </div>
                                    <Media body>
                                        <h5 className="font-size-13 mb-1">RSI Indicator</h5>
                                        <p className="text-muted mb-1">Relative Strength Index</p>
                                    </Media>
                                </Media>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link onClick={handleSelect} to="#">
                                <Media>
                                    <div className="mr-3">
                                        <img src={img1} alt="" className="avatar-xs img-thumbnail rounded-circle" />
                                    </div>
                                    <Media body>
                                        <h5 className="font-size-13 mb-1">MACD Indicator</h5>
                                        <p className="text-muted mb-1">MACD</p>
                                    </Media>
                                </Media>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link onClick={handleSelect} to="#">
                                <Media>
                                    <div className="mr-3">
                                        <img src={img1} alt="" className="avatar-xs img-thumbnail rounded-circle" />
                                    </div>
                                    <Media body>
                                        <h5 className="font-size-13 mb-1">{'Support & Resistance'}</h5>
                                        <p className="text-muted mb-1"></p>
                                    </Media>
                                </Media>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default AlertType
