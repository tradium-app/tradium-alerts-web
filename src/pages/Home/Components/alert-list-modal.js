import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Modal, ModalHeader, Card, CardBody, Table } from 'reactstrap'
import toastr from 'toastr'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Link } from 'react-router-dom'
import { DELETE_ALERT_MUTATION } from '../../Stock/Stock'

toastr.options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    preventDuplicates: true,
    newestOnTop: true,
}

const AlertListModal = ({ symbol, alertSignal, alerts, isShowing, toggle }) => {
    const [showDeleteAlert, setShowDeleteAlert] = useState({ show: false })
    const [deleteAlertError, setDeleteAlertError] = useState(null)
    const [deleteAlertResponse, setDeleteAlertResponse] = useState(null)

    const [deleteAlert] = useMutation(DELETE_ALERT_MUTATION, {
        onError: setDeleteAlertError,
        onCompleted: setDeleteAlertResponse,
    })

    if (deleteAlertResponse?.deleteAlert?.success) {
        toastr.success('Alert deleted successfully.')
        setDeleteAlertResponse(null)
    } else if (deleteAlertResponse?.deleteAlert?.success === false || deleteAlertError) {
        toastr.error('Alert deletion failed.')
        setDeleteAlertResponse(null)
    }

    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} tabIndex="-1" toggle={toggle} fade={false} centered>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>
                    {alertSignal} Alerts configured for {symbol}
                </ModalHeader>
                <Card className="overflow-hidden">
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table mb-0">
                                <tbody>
                                    {alerts?.map((alert, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="media pt-1 pb-1">
                                                        <div className="col-form-label mr-2">
                                                            {alert.status == 'On' && alert.signal == 'Buy' && (
                                                                <i className="mdi mdi-bell-ring text-success font-size-18"></i>
                                                            )}
                                                            {alert.status == 'On' && alert.signal == 'Sell' && (
                                                                <i className="mdi mdi-bell-ring text-danger font-size-18"></i>
                                                            )}
                                                            {alert.status == 'Off' && (
                                                                <i className="mdi mdi-bell-outline text-muted font-size-18"></i>
                                                            )}
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>{alert.signal + ' : ' + alert.title}</h5>
                                                            {alert.conditions.map((condition, index) => (
                                                                <div key={index}>
                                                                    {toProperCase(condition.timeframe) +
                                                                        ' ' +
                                                                        condition.indicator.toUpperCase() +
                                                                        (condition.operator == 'Not' ? ' ≠ ' : ' = ') +
                                                                        condition.valueText}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="col-form-label ml-1">
                                                            <Link
                                                                className="action-icon text-muted mr-2"
                                                                to={`/symbol/${alert.symbol}/alert/${alert.id}`}
                                                            >
                                                                <i className="bx bx-edit-alt font-size-18"></i>
                                                            </Link>
                                                            <Link
                                                                onClick={() => {
                                                                    setShowDeleteAlert({ show: true, alertId: alert.id })
                                                                }}
                                                                className="action-icon text-muted"
                                                                to="#"
                                                            >
                                                                <i className="bx bx-trash font-size-18"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            {showDeleteAlert.show ? (
                                <SweetAlert
                                    title="Are you sure you want to delete this alert?"
                                    warning
                                    showCancel
                                    focusCancelBtn
                                    allowEscape
                                    confirmBtnBsStyle="danger"
                                    cancelBtnBsStyle="primary"
                                    onConfirm={() => {
                                        deleteAlert({ variables: { alertId: showDeleteAlert.alertId } })
                                        setShowDeleteAlert({ show: false })
                                    }}
                                    onCancel={() => {
                                        setShowDeleteAlert({ show: false })
                                    }}
                                ></SweetAlert>
                            ) : null}
                            {(!alerts || alerts.length == 0) && 'No Alerts configured yet.'}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Modal>
    ) : null
}

function toProperCase(text) {
    return text[0].toUpperCase() + text.substring(1)
}

export default AlertListModal
