function split (wholeArray) {

  let length = wholeArray.length
  let midIdx = length/2

  let firstHalf = wholeArray.slice(0, midIdx)
  let secondHalf = wholeArray.slice(midIdx)

  return [firstHalf, secondHalf]
}


function merge (firstHalf, secondHalf) {
  let sortedArr = []

  for (let i = 0; i < firstHalf.length; i++){
    let first = firstHalf[i]
    let second = secondHalf[i]

    console.log("FIRST _______>",first)
    console.log("SECOND _______>",second)
    if(first < second){
      sortedArr.push(first)
      sortedArr.push(second)
    } else {
      sortedArr.push(second)
      sortedArr.push(first)
    }
  }

  if(secondHalf.length > firstHalf.length){
  let lastNum = secondHalf[secondHalf.length-1]
  sortedArr.push(lastNum)
  }

  return sortedArr
}


function mergeSort(array){
debugger;
   if ( array.length <= 1){ //------> base case
       return array
   } else {
       let firstSplit = split(array)
       let one = firstSplit[0]
       let two = firstSplit[1]

       return merge(mergeSort(one),mergeSort(two))
   }
}

//console.log(mergeSort([3,5,2,1]))
console.log(merge([3,5], [1,2]))

//  [1, 5, 4, 2, 6]
// [[1, 5], [4, 2, 6]]
//[[1][5]][[4][2,6]]
//[1][5][4][2][6]




