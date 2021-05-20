import { Label, Progress } from 'reactstrap'

const Poll = ({ poll }) => {
    let totalVotes = 0

    const options = poll.options.map((option, index) => {
        totalVotes += option.votes ?? 0
        const id = poll._id + '-' + (option.order ?? index)
        return { ...option, id }
    })

    return (
        <div className="control-group">
            <div className="controls mb-4">
                <p className="font-size-16">{poll.question}</p>

                {options &&
                    options.map((option) => (
                        <div className="custom-control custom-radio mb-4" key={option.id}>
                            <input id={option.id} type="radio" name="positions" className="custom-control-input" value="a" />
                            <Label className="custom-control-label d-inline-block pt-0" for={option.id} xl="12">
                                {option.text}
                                <Progress color="primary" className="mt-2" value={option.votes / totalVotes} max={totalVotes}></Progress>
                            </Label>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Poll
