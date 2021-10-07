import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import toastr from '../../../toastrCustom'

const CopyAlert = ({ alertId, isSubmitting }) => {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const [copyAlertMutate] = useMutation(COPY_ALERT_MUTATION, {
        onError: setError,
        onCompleted: setData,
    })

    const onClick = () => {
        copyAlertMutate({ variables: { alertId } })
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
        <Link onClick={onClick} disabled={isSubmitting} to="#" className="btn waves-effect waves-light">
            {'Copy this alert to all stocks'}
        </Link>
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
