import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Media, Table } from 'reactstrap'
import img1 from '../../../assets/images/poll.png'

const Indicator = ({ handleSelect }) => {
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
                    <select id="ddlCreditCardType" name="ddlCreditCardType" className="form-control">
                        <option value="">--Please Select--</option>
                        <option value="AE">RSI</option>
                        <option value="VI">MACD</option>
                    </select>
                </tbody>
            </Table>
        </div>
    )
}

export default Indicator
