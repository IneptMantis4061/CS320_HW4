describe('TestForPerformance', function() {
  describe('MaxPrimeSum', function() {
    it('maxPrimeSum(10000) should take less than ___ seconds', function() {
      this.slow(0);
      chai.expect(maxPrimeSum(10000)).to.be.an('array').of.length(2).to.deep.equal([9521,65]);
    });

    it('maxPrimeSum(100000) should take less than ___ seconds', function() {
      this.slow(0);
      chai.expect(maxPrimeSum(100000)).to.be.an('array').of.length(2).to.deep.equal([92951,183]);
    });
  });
});