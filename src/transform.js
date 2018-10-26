


function checkingContent(board) {

  const lessThan20 = board.filter(a => a.age < 20 && a.age > 17).reduce(function (acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, [])
  const twentyToThirty = board.filter(a => a.age < 30 && a.age > 20).reduce(function (acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, [])
  const thirtyToForty = board.filter(a => a.age < 40 && a.age > 30).reduce(function (acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, [])
  const fortyToFifty = board.filter(a => a.age < 50 && a.age > 40).reduce(function (acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, [])
  const over50 = board.filter(a => a.age > 50 ).reduce(function (acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, [])
}

function groupAdultsByAgeRange(board) {


}




module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange()


const tableau1 = [{ name: "Anna", age: 31 }, { name: "John", age: 32 }, { name: "Hank", age: 60 }]

groupAdultsByAgeRange(tableau1)
console.log(groupAdultsByAgeRange(tableau1)
)





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

