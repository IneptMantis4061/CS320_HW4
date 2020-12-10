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

});


