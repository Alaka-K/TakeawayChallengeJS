const Takeaway = require('./takeaway');

describe('Takeaway', () => {
  it('initialize with empty orders array', () => {
    takeaway = new Takeaway();
    expect(takeaway.getOrders()).toStrictEqual([]);
  });

  it('add an item to order', () => {
    takeaway = new Takeaway();
    takeaway.addOrder('Rice');
    expect(takeaway.getOrders().length).toEqual(1);
  });

  it('prints the list of dishes', () =>{
    takeaway = new Takeaway();
    let menu = { printDishes: () => 'The Rice cost £3' };
    expect(takeaway.printMenu()).toContain('The Rice cost £3');
  });

  it('prints all orders with price', () => {
    takeaway = new Takeaway(); 
    takeaway.addOrder('Pizza');
    takeaway.addOrder('Chicken');
    expect(takeaway.printOrders()).toContain('You ordered Pizza: £4');
  });

  it('shows sum of orders', () => {
    takeaway = new Takeaway(); 
    takeaway.addOrder('Pizza');
    takeaway.addOrder('Chicken');
    expect(takeaway.orderTotal()).toEqual(6);
  });
}); 