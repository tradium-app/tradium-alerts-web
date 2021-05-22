import { Link } from 'react-router-dom'
import { Badge, Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap'
import { getRelativeTime } from '../../../components/Common/time'
import PollBody from './PollBody'

const PollCard = ({ poll, authUser }) => {
    return (
        <Card key={poll._id}>
            <CardBody>
                <Row className="media align-items-center mb-4">
                    <Link to={'/profile/' + poll.author?._id}>
                        <img className="avatar-xs img-thumbnail rounded-circle mr-2" src={poll.author?.imageUrl} alt="" />
                    </Link>
                    <div className="media-body align-items-center">
                        <Link to={'/profile/' + poll.author?._id} className="text-muted font-size-10 mb-0">
                            {poll.author?.name}
                        </Link>
                        <p className="text-muted font-size-10 mb-0">{getRelativeTime(poll.modifiedDate)}</p>
                    </div>
                    {authUser && authUser._id === poll.author?._id && (
                        <UncontrolledDropdown className="float-right mr-1">
                            <DropdownToggle href="#" className="card-drop" tag="i">
                                <i className="mdi mdi-dots-horizontal font-size-18"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="#">Delete</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    )}
                </Row>

                <div className="media mb-2">
                    <div className="media-body">
                        <PollBody poll={poll} key={poll._id} />
                        <div>
                            <Badge className="badge badge-primary font-size-11 mr-1">#java</Badge>
                            <Badge className="badge badge-primary font-size-11 mr-1">#redux</Badge>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default PollCard
