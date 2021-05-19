import { Label, Progress } from 'reactstrap'

const Poll = ({ poll }) => {
    let totalVotes = 0
    poll.options.forEach((option) => {
        totalVotes += option.votes ?? 0
    })

    return (
        <div className="control-group">
            <div className="controls mb-4">
                <p className="font-size-16">{poll.question}</p>

                {poll.options &&
                    poll.options.map((option) => (
                        <div className="custom-control custom-radio mb-4" key={option.text}>
                            <input type="radio" id="radio5" name="positions" className="custom-control-input" value="a" />
                            <Label className="custom-control-label d-inline-block pt-0" for="radio5" xl="12">
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
