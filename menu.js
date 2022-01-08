class Menu {
    constructor () {
      this.dishes = { Rice: 3, Chicken: 2,
                      Kimchi: 3, Burger: 2, 
                      Pizza: 4, Noodles: 2 }
    };
  
    getDishes () {
      return this.dishes
    }
}
  
module.exports = Menu;