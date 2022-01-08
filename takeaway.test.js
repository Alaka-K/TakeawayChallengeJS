const Takeaway = require('./takeaway');
describe('Takeaway', () => {
  it('initialize with empty orders array', () => {
    takeaway = new Takeaway();
    expect(takeaway.getOrders()).toStrictEqual([]);
  });
});