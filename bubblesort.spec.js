beforeAll(function() {
    spyOn(bubblesToBeSorted,'swap').and.callThrough()
});
it('calling the swap func', function(){
    bubblesToBeSorted.bubbleSort([2,3]);
    expect(bubblesToBeSorted.swap.calls.count()).toEqual(1)

});

describe('Bubble Sort', function(){

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it( 'handles two elements in n an array', function(){
        expect( bubbleSort([5,3]) ).toEqual( [3,5] )
    });

    it( 'handles five elements in n an array', function(){
        expect( bubbleSort([2,1,5,3,8]) ).toEqual( [1,2,3,5,8] )
    });

    it( 'handels more than 5 elements', function(){
        expect( bubbleSort([16,4,10,2,1,5,3,8]) ).toEqual( [1,2,3,4,5,8,10,16] )
    })
  });