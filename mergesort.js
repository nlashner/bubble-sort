function split (wholeArray) {

  let length = wholeArray.length
  let midIdx = length/2

  let firstHalf = wholeArray.slice(0, midIdx)
  let secondHalf = wholeArray.slice(midIdx)

  return [firstHalf, secondHalf]
}


function merge (firstHalf, secondHalf){

  let returnArr = []

  while(firstHalf.length >= 1 && secondHalf.length >= 1){
    if(firstHalf[0] < secondHalf[0]){
      returnArr.push(firstHalf[0])
      firstHalf.shift()
    } else {
      returnArr.push(secondHalf[0])
      secondHalf.shift()
  }
}
if(secondHalf.length){
  returnArr.push(...secondHalf)
}
if(firstHalf.length){
  returnArr.push(...firstHalf)
}

  return returnArr
}



function mergeSort(array){

   if ( array.length <= 1){ //------> base case
       return array
   } else {
       let firstSplit = split(array)
       let one = firstSplit[0]
       let two = firstSplit[1]

       return merge(mergeSort(one),mergeSort(two))
   }
}

console.log(mergeSort([3,5,2,1,7,10]))





