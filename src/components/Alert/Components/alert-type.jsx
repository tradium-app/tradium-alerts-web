import React from 'react'
import { Link } from 'react-router-dom'
import { Media, Table } from 'reactstrap'
import img1 from '../../../assets/images/poll.png'

const AlertType = ({ handleSelect }) => {
    const alertTypes = [
        {
            name: 'RSI Indicator',
            description: 'Relative Strength Index',
            onClick: () => handleSelect('rsi'),
        },
        {
            name: 'MACD Indicator',
            description: 'MACD',
            onClick: () => handleSelect('macd'),
        },
    ]

    return (
        <div className="table-responsive">
            <Table className="table-centered table-nowrap">
                <tbody>
                    {alertTypes.map((alertType, index) => (
                        <tr key={index}>
                            <td>
                                <Link onClick={alertType.onClick} to="#">
                                    <Media>
                                        <div className="mr-3">
                                            <img src={img1} alt="" className="avatar-xs img-thumbnail rounded-circle" />
                                        </div>
                                        <Media body>
                                            <h5 className="font-size-13 mb-1">{alertType.name}</h5>
                                            <p className="text-muted mb-1">{alertType.description}</p>
                                        </Media>
                                    </Media>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default AlertType
