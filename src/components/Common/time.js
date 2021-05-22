import moment from 'moment'

moment.updateLocale('en', {
    relativeTime: {
        m: '1 min',
        mm: '%d mins',
        h: '1 hour',
    },
})

export const getRelativeTime = (date) => {
    const momentDate = moment.utc(Number(date))

    const minsAgo = moment.duration({ from: momentDate, to: new Date() }).asMinutes()

    const relativeDateString = minsAgo < 60 ? momentDate.startOf('minute').fromNow() : momentDate.startOf('hour').fromNow()

    return momentDate.format('MMMM Do') + ' (' + relativeDateString + ')'
}
