/* */
//Test 1 - primeGen test 1
describe('TestForCorrectness', function() {

  describe('PrimeGen', function() {
      describe('Test1', function () {
        it('should return [2,3,5,7]', function() {
          chai.expect(primeGen(10)).to.be.an('array').of.length(4).to.deep.equal([2, 3, 5, 7]);
        });
      });

      describe('Test2', function() {
        it('should return [2, 3, 5, 7, 11, 13, 17, 19]', function() {
          chai.expect(primeGen(20)).to.be.an('array').of.length(8).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
        })
      })
    });

  describe('CumulativeSum', function() {
    describe('Test1', function() {
      const testNums = [1,2,3,4];
      it('should return [1, 3, 6, 10]', function() {
        chai.expect(cumulativeSum(testNums)).to.be.an('array').of.length(4).to.deep.equal([1,3,6,10]);
      });
    });

    describe('Test2', function() {
      const testNums = [10,11,12,13,14];
      it('should return [10, 21, 33, 46, 60]', function() {
        chai.expect(cumulativeSum(testNums)).to.be.an('array').of.length(5).to.deep.equal([10, 21, 33, 46, 60]);
      });
    });
  });

});


