import React from 'react'
import { Modal, ModalHeader, Card, CardBody, Table } from 'reactstrap'
import { getRelativeTime } from '../../../lib/Time'

const NewsListModal = ({ news, isShowing, toggle }) => {
    return isShowing ? (
        <Modal isOpen={isShowing} role="dialog" autoFocus={true} tabIndex="-1" toggle={toggle} fade={false} centered>
            <div className="modal-content">
                <ModalHeader toggle={toggle}>Top News for {news[0].symbol}</ModalHeader>
                <Card className="overflow-hidden">
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table mb-0">
                                <tbody>
                                    {news
                                        ?.sort((a, b) => b.createdDate - a.createdDate)
                                        .map((article, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <a href={article.link} target="_blank" rel="noreferrer">
                                                                    <div className="font-size-14 pt-1 pb-1">
                                                                        {article.headline}
                                                                        <p className="font-size-11 text-muted mb-0">
                                                                            <i className="mdi mdi-clock-outline"></i>{' '}
                                                                            {getRelativeTime(article.createdDate)}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Modal>
    ) : null
}

export default NewsListModal
