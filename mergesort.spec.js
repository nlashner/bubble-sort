describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
      expect(split([1,2,3,4])).toEqual([[1,2][3,4]])
  });
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2][3,4,5]])
});
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([3,4,6],[1,3,5])).toEqual([ 1, 3, 3, 4, 5, 6 ])
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([3,4,6],[1,3,5,7])).toEqual([ 1, 3, 3, 4, 5, 6, 7])
  });
});

describe('Merge sort', function(){
  it('is able to sort one array', function(){
    expect(merge([3, 4, 6, 1, 3, 5])).toEqual([ 1, 3, 3, 4, 5, 6 ])
  });
});

