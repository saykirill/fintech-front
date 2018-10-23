// Tests for functions.js
const expect = require('expect.js');
const { pickPeaks, whoIsNext } = require('./functions');

describe('additionalHomeWork02', () => {
  describe('pickPeaks', () => {
    it('should returns the positions and the values of the "peaks"', () => {
      expect(
        pickPeaks([0, 1, 2, 5, 1, 0])).to.eql({
        pos: [3],
        peaks: [5]
      });

      expect(
        pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).to.eql({
        pos: [3, 7],
        peaks: [6, 3]
      });

      expect(
        pickPeaks([1, 2, 2, 2, 1])).to.eql({
        pos: [1],
        peaks: [2]
      });

      expect(
        pickPeaks(['test', 'test'])).to.eql({
        pos: [],
        peaks: []
      });

      expect(
        pickPeaks([1, 2, 2, 2, 3])).to.eql({
        pos: [],
        peaks: []
      });
    });
  });
});

describe('whoIsNext', () => {
  it('should return the name of the person who drinks the n-th can of cola', () => {
    expect(
      whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1)).to.eql('Sheldon');
    expect(
      whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52)).to.eql('Penny');
    expect(
      whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 7230702951)).to.eql('Leonard');
  });
});
