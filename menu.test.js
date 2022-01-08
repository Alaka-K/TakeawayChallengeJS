const Menu = require('./menu');

describe('Menu class', () => {
  it('initialize with a list of dishes', () =>{
    menu = new Menu();

    expect(menu.getDishes()).toEqual({ Rice: 3, Chicken: 2, Kimchi: 3, Burger: 2, Pizza: 4, Noodles: 2 });
  });

  it('prints the list of dishes', () =>{
    menu = new Menu();

    expect(menu.printDishes()).toContain('The Rice cost £3');
  });
});