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

  let firstSplit = split(array)

  while (firstSplit[0].length > 1){
  let one = mergeSort(firstSplit[0])
  let two = mergeSort(firstSplit[1])
  }
  merge(one, two)

  let newArr = one.concat(two)

  return newArr
}

console.log(mergeSort([1,3]))


//  [1, 5, 4, 2, 6]
// [[1, 5], [4, 2, 6]]
//[[1][5]][[4][2,6]]
//[1][5][4][2][6]




