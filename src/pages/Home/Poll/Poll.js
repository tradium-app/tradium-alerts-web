import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import { Label, Progress } from 'reactstrap'
import toastr from 'toastr'

const Poll = ({ poll }) => {
    let grandTotalVotes = 0

    const optionsInitial = poll.options
        .map((option) => {
            grandTotalVotes += option.totalVotes ?? 0
            return option
        })
        .sort((a, b) => a.order - b.order)

    const [options, setOptions] = useState(optionsInitial)

    const submitVoteHandler = (response) => {
        setOptions(response.submitVote.poll.options)
    }

    const [submitVoteMutate] = useMutation(SUBMIT_VOTE_QUERY, {
        onCompleted: submitVoteHandler,
    })

    const submitVote = (optionId) => {
        if (!localStorage.getItem('authUser')) {
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
                <p className="font-size-16">{poll.question}</p>

                {options &&
                    options.map((option) => (
                        <div className="custom-control custom-radio mb-4" key={option._id}>
                            <input
                                id={option._id}
                                type="radio"
                                name={poll._id}
                                className="custom-control-input"
                                value="a"
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

export default Poll
