import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import toastr from '../../../toastrCustom'
import SweetAlert from 'react-bootstrap-sweetalert'

const CopyAlert = ({ alertId, isSubmitting }) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [showConfirm, setshowConfirm] = useState(false)

    const [copyAlertMutate] = useMutation(COPY_ALERT_MUTATION, {
        onError: setError,
        onCompleted: setData,
    })

    const onClick = () => {
        setshowConfirm(true)
    }

    if (data) {
        if (data?.copyAlertToAllStocks.success) {
            toastr.success('This alert is copied to all stocks in your watchlist successfully.')
        } else if (!data?.copyAlertToAllStocks.success) {
            toastr.error('Error during copying this alert to other stoccks..')
        }
        setData(null)
    }

    if (error) {
        toastr.error(error.message)
        setError(null)
    }

    return (
        <div>
            <Link onClick={onClick} disabled={isSubmitting} to="#" className="btn waves-effect waves-light">
                {'Copy this alert to all stocks'}
            </Link>
            {showConfirm ? (
                <SweetAlert
                    title="Are you sure you want to copy this alert to all stocks in your watchlist?"
                    warning
                    showCancel
                    focusCancelBtn
                    allowEscape
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="primary"
                    onConfirm={() => {
                        copyAlertMutate({ variables: { alertId } })
                        setshowConfirm(false)
                    }}
                    onCancel={() => {
                        setshowConfirm(false)
                    }}
                ></SweetAlert>
            ) : null}
        </div>
    )
}

export const COPY_ALERT_MUTATION = gql`
    mutation copyAlertToAllStocks($alertId: String) {
        copyAlertToAllStocks(alertId: $alertId) {
            success
            message
        }
    }
`

export default CopyAlert
