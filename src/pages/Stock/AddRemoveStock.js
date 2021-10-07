import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import { Button } from 'reactstrap'
import toastr from '../../toastrCustom'

const AddRemoveStock = ({ symbol, isOnWatchList }) => {
    const [onWatchList, setOnWatchList] = useState(isOnWatchList)
    const [addStockError, setAddStockError] = useState(null)
    const [addStockResponse, setAddStockResponse] = useState(null)
    const [addStock] = useMutation(ADD_STOCK_MUTATION, {
        onError: setAddStockError,
        onCompleted: setAddStockResponse,
    })

    if (addStockResponse?.addStock?.success) {
        setOnWatchList(true)
        toastr.success('Stock added to the WatchList.')
        setAddStockResponse(null)
    } else if (addStockResponse?.addStock?.success === false || addStockError) {
        toastr.error('Stock addition failed.')
        setAddStockResponse(null)
    }

    const [removeStockError, setRemoveStockError] = useState(null)
    const [removeStockResponse, setRemoveStockResponse] = useState(null)
    const [removeStock] = useMutation(REMOVE_STOCK_MUTATION, {
        onError: setRemoveStockError,
        onCompleted: setRemoveStockResponse,
    })

    if (removeStockResponse?.removeStock?.success) {
        setOnWatchList(false)
        toastr.success('Stock removed from the WatchList.')
        setRemoveStockResponse(null)
    } else if (removeStockResponse?.removeStock?.success === false || removeStockError) {
        toastr.error('Stock removal failed.')
        setRemoveStockResponse(null)
    }

    return (
        <React.Fragment>
            {!onWatchList && (
                <Button
                    type="button"
                    color="primary"
                    onClick={() => {
                        addStock({ variables: { symbol } })
                    }}
                >
                    Add to WatchList
                </Button>
            )}
            {onWatchList && (
                <Button
                    type="button"
                    color="danger"
                    onClick={() => {
                        removeStock({ variables: { symbol } })
                    }}
                >
                    Remove from WatchList
                </Button>
            )}
        </React.Fragment>
    )
}

export const ADD_STOCK_MUTATION = gql`
    mutation addStock($symbol: String) {
        addStock(symbol: $symbol) {
            success
            message
        }
    }
`
export const REMOVE_STOCK_MUTATION = gql`
    mutation removeStock($symbol: String) {
        removeStock(symbol: $symbol) {
            success
            message
        }
    }
`

export default AddRemoveStock
