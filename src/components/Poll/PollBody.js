import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Label, Progress } from 'reactstrap'
import toastr from 'toastr'
import { Link } from 'react-router-dom'

const PollBody = ({ authUser, poll }) => {
    let grandTotalVotes = 0

    const optionsInitial = poll.options.map((option) => {
        grandTotalVotes += option.totalVotes ?? 0
        return option
    })

    const [options, setOptions] = useState(optionsInitial)

    const submitVoteHandler = (response) => {
        setOptions(response.submitVote.poll.options)
    }

    const [submitVoteMutate] = useMutation(SUBMIT_VOTE_QUERY, {
        onCompleted: submitVoteHandler,
    })

    const submitVote = (optionId) => {
        if (!authUser) {
            toastr.error('Please Login to vote.')
            return
        }

        const pollVote = { pollId: poll._id, optionId }

        submitVoteMutate({
            variables: {
                pollVote,
            },
        })
    }

    return (
        <div className="control-group">
            <div className="controls mb-4">
                <p className="font-size-18 mb-4">
                    <Link to={`/${poll.author?.userUrlId}/${poll.pollUrlId}`} className="text-dark">
                        {poll.question}
                    </Link>
                </p>

                {options &&
                    options
                        .sort((a, b) => a.order - b.order)
                        .map((option) => (
                            <div className="custom-control custom-radio mb-1" key={option._id}>
                                <input
                                    id={option._id}
                                    type="radio"
                                    name={poll._id}
                                    defaultChecked={option.selected}
                                    className="custom-control-input"
                                    onClick={() => submitVote(option._id)}
                                />
                                <Label className="custom-control-label d-inline-block pt-0" for={option._id} xl="12">
                                    {option.text}
                                    <Progress color="primary" className="mt-2" value={option.totalVotes} max={grandTotalVotes}></Progress>
                                </Label>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export const SUBMIT_VOTE_QUERY = gql`
    mutation submitVote($pollVote: PollVote!) {
        submitVote(pollVote: $pollVote) {
            success
            message
            poll {
                options {
                    _id
                    text
                    order
                    totalVotes
                }
            }
        }
    }
`

export default PollBody
