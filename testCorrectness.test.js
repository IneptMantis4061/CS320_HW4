/* */
//Test 1 - primeGen test 1
describe('TestForCorrectness', function() {

  describe('PrimeGen', function() {
    it('primeGen(10)=>[2, 3, 5, 7]', function() {
          chai.expect(primeGen(10)).to.be.an('array').of.length(4).to.deep.equal([2, 3, 5, 7]);
    });

    it('primeGen(20)=>[2, 3, 5, 7, 11, 13, 17, 19]', function() {
          chai.expect(primeGen(20)).to.be.an('array').of.length(8).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
        });
    });

  describe('CumulativeSum', function() {
      const testNums = [1,2,3,4];
      it('cumulativeSum([1, 2, 3, 4])=>[1, 3, 6, 10]', function() {
        chai.expect(cumulativeSum(testNums)).to.be.an('array').of.length(4).to.deep.equal([1,3,6,10]);
      });

     const testNums1 = [10,11,12,13,14];
      it('cumulativeSum([10, 11, 12, 13, 14])=>[10, 21, 33, 46, 60]', function() {
        chai.expect(cumulativeSum(testNums1)).to.be.an('array').of.length(5).to.deep.equal([10, 21, 33, 46, 60]);
      });
  });

  describe('MaxPrimeSum', function() {
      it('maxPrimeSum(100)=>[41, 6]', function() {
        chai.expect(maxPrimeSum(100)).to.be.an('array').of.length(2).to.deep.equal([41,6]);
      });

      it('maxPrimeSum(1000)=>[953, 21]', function() {
        chai.expect(maxPrimeSum(1000)).to.be.an('array').of.length(2).to.deep.equal([953,21]);
      });
  });
});


