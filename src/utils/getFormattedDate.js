import moment from 'moment'

export default function (dateString) {
  const newString = dateString.split(' ')?.[0]?.split('-')
  return moment(new Date(...newString)).format('DD.MM.YYYY')
}
