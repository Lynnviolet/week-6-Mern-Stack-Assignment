// server/tests/utils/calculateTotal.test.js
const calculateTotal = require('../../utils/calculateTotal');

describe('calculateTotal', () => {
  it('should return the correct sum for a list of numbers', () => {
    const result = calculateTotal([10, 20, 30]);
    expect(result).toBe(60);
  });

  it('should return 0 for an empty array', () => {
    const result = calculateTotal([]);
    expect(result).toBe(0);
  });

  it('should handle negative numbers', () => {
    const result = calculateTotal([-10, 5, -5]);
    expect(result).toBe(-10);
  });
});
