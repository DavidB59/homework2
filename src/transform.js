
function minAgeMaxAge(board, minAge, maxAge) {
  return board.filter(a => a.age < maxAge && a.age > minAge)
}

function groupAdultsByAgeRange(board) {
  const lessThan20 = minAgeMaxAge(board, 17, 21)
  const twentyToThirty = minAgeMaxAge(board, 20, 31)
  const thirtyToForty = minAgeMaxAge(board, 30, 41)
  const fortyToFifty = minAgeMaxAge(board, 40, 51)
  const over50 = minAgeMaxAge(board, 50, 2000)
  const result = {}
  if (lessThan20[0] !== undefined) { result['20 and younger'] = lessThan20 }
  if (twentyToThirty[0] !== undefined) { result['21-30'] = twentyToThirty }
  if (thirtyToForty[0] !== undefined) { result['31-40'] = thirtyToForty }
  if (fortyToFifty[0] !== undefined) { result['41-50'] = fortyToFifty }
  if (over50[0] !== undefined) { result['51 and older'] = over50 }
  return result
}

module.exports = { groupAdultsByAgeRange }

