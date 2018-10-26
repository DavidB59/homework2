
function minAgeMaxAge (board,minAge,maxAge){
  return board.filter(a => a.age < maxAge && a.age > minAge).reduce(function (acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, [])
}

function groupAdultsByAgeRange(board) {
  const lessThan20 = minAgeMaxAge(board,17,21)
  const twentyToThirty = minAgeMaxAge(board,20,31)
  const thirtyToForty = minAgeMaxAge(board,30,41)
  const fortyToFifty = minAgeMaxAge(board,40,51)
  const over50 = minAgeMaxAge(board,50,2000)

  const result = {}
  if (lessThan20[0] !== undefined) { result['20 and younger']=lessThan20}
  if (twentyToThirty[0] !== undefined) { result['21-30']=twentyToThirty}
  if (thirtyToForty[0] !== undefined) { result['31-40']=thirtyToForty}
  if (fortyToFifty[0] !== undefined) { result['41-50']=fortyToFifty}
  if (over50[0] !== undefined) { result['51 and older']=over50}



  return result

}

module.exports = { groupAdultsByAgeRange }





//module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange()

/*
const tableau1 = [{ name: "Anna", age: 31 }, { name: "John", age: 32 }, { name: "Hank", age: 60 }]






const tableau2 = [
  { name: "dove", age: 17 },
  { name: "dave", age: 18 },
  { name: "hall", age: 19 },
  { name: "donn", age: 20 },
  { name: "trey", age: 21 },
  { name: "hann", age: 29 },
  { name: "chew", age: 30 },
  { name: "cloe", age: 31 },
  { name: "dart", age: 39 },
  { name: "this", age: 40 },
  { name: "dame", age: 41 },
  { name: "henk", age: 49 },
  { name: "anna", age: 50 },
  { name: "olga", age: 51 },
  { name: "bert", age: 52 },
  { name: "oldd", age: 120 },
]

//console.log(minAgeMaxAge(tableau2,32,37))

console.log(groupAdultsByAgeRange(tableau2))*/