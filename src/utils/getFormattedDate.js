export default function (dateString) {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat('en-GB').format(date).replaceAll('/', '.')
}
