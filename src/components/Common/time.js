import moment from 'moment'

export const getRelativeTime = (date) => {
    const convertedDate = Number(date)
    return moment(convertedDate).format('MMMM Do') + ' (' + moment(convertedDate).startOf('hour').fromNow() + ')'
}
