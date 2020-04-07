const bubblesToBeSorted = {}

bubblesToBeSorted.swap = (array, i, j) => {
    let curr = array[i]
    array[i] = array[j]
    array[j] = curr
}


bubblesToBeSorted.bubbleSort = (array) =>  {
    for ( let i=0; i < array.length; i++){
        for ( let j= 1; j < array.length; j++)
            if (array[j-1] > array[j]){
                swap(array, j-1, j)
            }
    }
    return array
  }